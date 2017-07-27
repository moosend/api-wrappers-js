var _Errors = [];
_Errors[200] = "The given mailing list id was not found. Please make sure you have provided the right id.";
_Errors[201] = "The given custom field id was not found. Please make sure you have provided the right id.";
_Errors[202] = "The given segment id was not found. Please make sure you have provided the right id.";
_Errors[300] = "The given subscriber id was not found. Please make sure you have provided the right id.";
_Errors[400] = "The given campaign id was not found. Please make sure you have provided the right id.";
_Errors[401] = "Could not find any statistics for the given campaign id. Please make sure the campaign provided has been sent.";
_Errors[402] = "The given sender email was not found. Please make sure you have provided the right email.";
_Errors[501] = "The given API request is not valid. Please check the reference manual on http://www.moosend.com/api for more details";

var getJSON = {
	type: 'text/javascript',
	charset: 'utf-8',
	head: document.getElementsByTagName('head')[0],
	scripts: {},
	callbacks: {},
	count: 1,
	name: function(_callback){
		var self = this;
		var name = '_jsonp_' + (new Date).getTime() + '_' + this.count++;
		this.callbacks[name] = function (json) {
			self.head.removeChild(self.scripts[name]);
			delete self.callbacks[name];
			delete self.scripts[name];
			_callback(json);
		};
		return name;
	},
	load: function(_url, _callback){
		var name = this.name(_callback);
		var script = document.createElement('script');
		script.type = this.type;
		script.charset = this.charset;
		script.src = _url.replace(/{callback}/, "getJSON.callbacks." + name);
		this.head.appendChild(script);
		this.scripts[name] = script;
	}
};

function _ajax(params) {
	if (!params) return;
	if (!params.type) params.type = 'GET';

	var xmlhttp = new XMLHttpRequest();
	//else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange = function () {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        if (params.success) { params.success(xmlhttp.responseText); }
	    } else if (xmlhttp.readyState == 4) {
	        if (params.error) params.error(xmlhttp, xmlhttp.status, xmlhttp.responseText);
	    }
	};

	xmlhttp.open(params.type, params.url, true);
	//xmlhttp.setRequestHeader('User-Agent','Moosend Javascript Api');
	
	xmlhttp.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');

	if (params.data) {
	    xmlhttp.setRequestHeader('Content-Type', 'application/json');
	    xmlhttp.send(JSON.stringify(params.data));
	}
	else xmlhttp.send();
}

function _perfCall(urlPath, method, form, callback, params) {
    if (typeof form == 'function') {
        params = callback;
		callback = form; 
		form = null;
    }

	if (!MoosendAPI.ApiKey) { 
		callback('Please set your api key in MoosendAPI.ApiKey');
		return;
	}

	if (urlPath.indexOf('?') < 0) urlPath += '?format=json&apikey=' + MoosendAPI.ApiKey + '&mode=' + MoosendAPI.Mode;
	else urlPath += '&format=json&apikey=' + MoosendAPI.ApiKey + '&mode=' + MoosendAPI.Mode;

	if (params) urlPath += '&' + $.param(params);

	_ajax({
	    data: form,
	    //files: files,
	    type: method,
	    url: MoosendAPI.Endpoint + urlPath,
	    success: function (json) {
	        json = JSON.parse(json);
	        callback(null, json);
	    },
	    error: function (XMLHttpRequest, textStatus, error) {
	        callback(error);
	    }
	});
}

var MoosendAPI = {
    Mode: 'data',
    Endpoint: 'http://api.moosend.com/v2',
    Campaigns: {
        /* Returns a list of all campaigns in your account with detailed infomation. Because the results from this call 
        /* could be quite big, paging information is required as input. */
        /* Web Documentation at http://moosend.com/api/campaigns#FindByID */
        GetCampaign: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling GetCampaign');
            else {
                _perfCall('/campaigns/' + campaignId + '/view.json', 'POST', callback);
            }
        },
        /* Returns a list of all campaigns in your account with detailed infomation. Because the results from this call 
        /* could be quite big, paging information is required as input. */
        /* Web Documentation at http://moosend.com/api/campaigns#Index */
        GetCampaigns: function (page, pageSize, callback, params) {
            if (typeof page == 'function') callback = page, page = 1;
            if (typeof pageSize == 'function') callback = pageSize, pageSize = 100;

            if (!page) page = 1;
            if (!pageSize) pageSize = 100;

            _perfCall('/campaigns/' + page + '/' + pageSize + '.json', 'GET', callback, params);
        },
        /* Creates a new campaign in your account. This method does not send the campaign, 
        /* but rather creates it as a draft, ready for sending or testing. You can choose to send either a regural 
        /* campaign or an AB split campaign. Campaign content must be specified from a web location. */
        /* Web Documentation at http://moosend.com/api/campaigns#Create */
        CreateDraft: function (createCampaignForm, callback) {
            if (!createCampaignForm) callback('CreateCampaignForm is a required parameter when calling CreateDraft');
            else {
                var validation = createCampaignForm.validate();
                if (!validation.valid) {
                    callback('The instance of CreateCampaignForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/campaigns/create.json', 'POST', createCampaignForm, callback);
                }
            }
        },
        UpdateDraft: function (callback) {

        },
        /* Creates an exact copy of an existing campaign. If the campaign to be cloned has already been sent, 
        /* the new campaign is created as a draft. */
        /* Web Documentation at http://moosend.com/api/campaigns#Clone */
        Clone: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling Clone');
            else {
                _perfCall('/campaigns/' + campaignId + '/clone.json', 'POST', callback);
            }
        },
        /* Sends a test email of a draft campaign to an array of email addresses you specify for previewing. */
        /* Web Documentation at http://moosend.com/api/campaigns#SendTest */
        SendCampaignTest: function (testCampaignForm, callback) {
            if (!testCampaignForm) callback('TestCampaignForm is a required parameter when calling SendCampaignTest');
            else {
                var validation = testCampaignForm.validate();
                if (!validation.valid) {
                    callback('The instance of AddSubscriberForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/campaigns/' + testCampaignForm.CampaignId + '/send_test.json', 'POST', testCampaignForm, callback);
                }
            }
        },
        /* Sends an existing draft campaign to all recipients specified in its mailing list. The campaign is sent immediatelly. */
        /* Web Documentation at http://moosend.com/api/campaigns#Send */
        Send: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling Send');
            else {
                _perfCall('/campaigns/' + campaignId + '/send.json', 'POST', callback);
            }
        },
        /* Deletes a campaign from your account, draft or even sent. */
        /* Web Documentation at http://moosend.com/api/campaigns#Delete */
        Delete: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling Delete');
            else {
                _perfCall('/campaigns/' + campaignId + '/delete.json', 'DELETE', callback);
            }
        },
        /* Provides a basic summary of the results for any sent campaign such as the number of recipients, 
        /* opens, clicks, bounces, unsubscribes, forwards etc to date. */
        /* Web Documentation at http://moosend.com/api/campaigns#FindByIDWithStatistics */
        GetCampaignSummary: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling GetCampaignSummary');
            else {
                _perfCall('/campaigns/' + campaignId + '/view_summary.json', 'GET', callback);
            }
        },
        /* Returns a detailed report of your campaign activity (opens, clicks, etc) by country. */
        /* Web Documentation at http://moosend.com/api/campaigns#GeographicsActivity */
        GetActivityByLocation: function (campaignId, page, pageSize, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling GetActivityByLocation');
            else {
                _perfCall('/campaigns/' + campaignId + '/stats/countries.json', 'GET', callback, { page: page, pageSize: pageSize });
            }
        },
        /* Returns a list with your campaign links and how many clicks have been made by your recipients, either unique or total. */
        /* Web Documentation at http://moosend.com/api/campaigns#LinkActivity */
        GetLinkActivity: function (campaignId, callback) {
            if (!campaignId) callback('CampaignId is a required parameter when calling GetLinkActivity');
            else {
                _perfCall('/campaigns/' + campaignId + '/stats/links.json', 'GET', callback);
            }
        }
    },
    Subscribers: {
        /* Gets basic information about a member in a mailing list, such as name, date created, and status */
        /* Web Documentation at http://moosend.com/api/subscribers#GetByEmail */
        GetSubscriberDetails: function (mailingListId, email, callback) {
            if (!mailingListId) callback('MailingListID is a required parameter when calling GetSubscriberDetails');
            else if (!email) callback('Email is a required parameter when calling GetSubscriberDetails');
            else {
                var urlPath = '/subscribers/' + mailingListId + '/subscribers/view.json?email=' + email;

                _perfCall(urlPath, 'GET', callback);
            }
        },
        /* Removes a member from the specified mailing list permanently (without putting it in the supression list). */
        /* Web Documentation at http://moosend.com/api/subscribers#Remove */
        Subscribe: function (addSubscriberForm, callback) {
            if (!addSubscriberForm) callback('AddSubscriberForm is a required parameter when calling AddSubscriber');
            else {
                var validation = addSubscriberForm.validate();
                if (!validation.valid) {
                    callback('The instance of AddSubscriberForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/subscribers/' + addSubscriberForm.MailingListId + '/subscribe.json', 'POST', addSubscriberForm, callback);
                }
            }
        },
        /* Adds a new subscriber to the specified mailing list. If there is already a subscriber with the specified email 
        /* address in the list, it will be updated. */
        /* Web Documentation at http://moosend.com/api/subscribers#Unsubscribe */
        Remove: function (mailingListId, email, callback) {
            if (!email) callback('Email is a required parameter when calling RemoveSubscriber');
            if (!mailingListId) callback('MailingListID is a required parameter when calling RemoveSubscriber');
            else {
                _perfCall('/subscribers/' + mailingListId + '/remove.json?email=' + email, 'POST', callback);
            }
        },

        RemoveMany: function (mailingListId, emails, callback) {
            if (!emails) callback('Emails is a required parameter when calling RemoveMany');
            if (!mailingListId) callback('MailingListID is a required parameter when calling RemoveMany');
            else {
                _perfCall('/subscribers/' + mailingListId + '/remove_many.json?emails=' + emails, 'POST', callback);
            }
        },

        /* Unsubscribes a member from the specified mailing list or the specified campaign and puts it in the supression list. */
        /* Web Documentation at http://moosend.com/api/subscribers#Remove */
        Unsubscribe: function (callback) {

        },
        RecordAction: function(email, actionType, properties, callback) {
            if (!email) callback('Email is a required parameter when calling RecordAction');
            else if (!actionType) callback('ActionType is a required parameter when calling RecordAction');
            else {
                var urlPath = '/actions/create.json?email=' + email;
                _perfCall(urlPath, 'POST', { "ActionType": actionType, "Email": email, "Properties": properties }, callback);
            }
        },
        /* This method allows you to add multiple members in a mailing list with a single call. If some members already 
        /* exist, they will be updated. If you try to add an email with an invalid email address, this member will be ignored, 
        /* as the process will skip to the next member automatically. */
        /* Web Documentation at http://moosend.com/api/subscribers#SubscribeAll */
        SubscribeMany: function (mailingListId, subscribers, callback) {
            if (!mailingListId) callback('MailingListID is a required parameter when calling SubscribeMany');
            else if (!subscribers) callback('Subscribers array is a required parameter when calling SubscribeMany');
            else if (subscribers.length && subscribers.length > 0) callback('Subscribers array must have at least one entry when calling SubscribeMany');
            else {
                var noWithNoName = 0;
                var noWithNoEmail = 0;
                for (var i = 0; i < subscribers.length; i++) {
                    if (!subscribers[i].Name) noWithNoName++;
                    if (!subscribers[i].Email) noWithNoEmail++;
                }

                if (noWithNoName > 0) callback(noWithNoName + ' entries in the Subscribers array are missing the required Name parameter when calling AddMultipleSubscribers');
                else if (noWithNoEmail > 0) callback(noWithNoEmail + ' entries in the Subscribers array are missing the required Email parameter when calling AddMultipleSubscribers');
                else {
                    var urlPath = '/subscribers/' + mailingListId + '/subscribe_many.json?email=' + email;

                    _perfCall(urlPath, 'POST', { Members: subscribers }, callback);
                }
            }
        }
    },
    MailingLists: {
        /* Creates a new empty mailing list in your account. */
        /* Web Documentation at http://moosend.com/api/lists#Create */
        Create: function (createMailingListForm, callback) {
            if (!createMailingListForm) callback('CreateMailingListForm is a required parameter when calling CreateCustomField');
            else {
                var validation = createMailingListForm.validate();
                if (!validation.valid) {
                    callback('The instance of CreateMailingListForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/lists/create.json', 'POST', createMailingListForm, callback);
                }
            }
        },
        /* Deletes a mailing list from your account. */
        /* Web Documentation at http://moosend.com/api/lists#Delete */
        Delete: function (mailingListId, callback) {
            if (!mailingListId) callback('MailingListID is a required parameter when calling Delete');
            else {
                _perfCall('/lists/' + mailingListId + '/delete.json', 'DELETE', callback);
            }
        },
        /* Gets a list of your active mailing lists in your account. */
        /* Web Documentation at http://moosend.com/api/lists#Index */
        GetMailingLists: function (page, pageSize, callback) {
            if (typeof page == 'function') callback = page, page = 1;
            if (typeof pageSize == 'function') callback = pageSize, pageSize = 100;

            if (!page) page = 1;
            if (!pageSize) pageSize = 100;

            _perfCall('/lists/' + page + '/' + pageSize + '.json', 'GET', callback);
        },
        /* Gets details for a given mailing list. You may include mailing list member statistics in your results or not. 
        /* Any segments existing for the requested mailing list will be included in the results. */
        /* Web Documentation at http://moosend.com/api/lists#FindByID */
        GetMailingListDetails: function (mailingListId, withStatistics, callback, params) {
            if (!mailingListId) callback('MailingListId is a required parameter when calling GetSubscribersForMailingList');
            else {
                if (typeof withStatistics == 'function') {
                    params = callback;
                    callback = withStatistics;
                }

                var urlPath = '/lists/' + mailingListId + '/details.json';

                _perfCall(urlPath, 'GET', callback, params);
            }
        },
        /* Gets a list of all members in a given mailing list. You may filter the list by setting a date to fetch members 
        /* subscribed since then and/or by the status of the member. Because the results from this call could be quite big, 
        /* paging information is required as input. */
        /* Web Documentation at http://moosend.com/api/lists#GetMembers */
        GetSubscribersForMailingList: function (mailingListId, status, page, pageSize, callback, params) {
            if (typeof page == 'function') callback = page, page = 1;
            if (typeof pageSize == 'function') callback = pageSize, pageSize = 1000;

            if (!page) page = 1;
            if (!pageSize) pageSize = 1000;

            if (!mailingListId) callback('MailingListID is a required parameter when calling GetSubscribersForMailingList');
            else if (!status || typeof status == 'function') { callback = status; callback('Status is a required parameter when calling GetSubscribersForMailingList'); }
            else {
                var urlPath;
                if (status == null || status == 'all')
                    urlPath = '/lists/' + mailingListId + '/subscribers.json?page=' + page + '&pageSize=' + pageSize;
                else
                    urlPath = '/lists/' + mailingListId + '/subscribers/' + status + '.json?page=' + page + '&pageSize=' + pageSize;

                _perfCall(urlPath, 'GET', callback, params);
            }
        },
        /* Creates a new custom field in the specified mailing list. */
        /* Web Documentation at http://moosend.com/api/lists#SaveCustomField */
        CreateCustomField: function (createCustomFieldForm, callback) {
            if (!createCustomFieldForm) callback('CreateCustomFieldForm is a required parameter when calling CreateCustomField');
            else {
                var validation = createCustomFieldForm.validate();
                if (!validation.valid) {
                    callback('The instance of CreateCustomFieldForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/lists/' + createCustomFieldForm.MailingListId + '/customfields/create.json', 'POST', createCustomFieldForm, callback);
                }
            }
        },
        /* Updates an existing custom field in the specified mailing list. */
        /* Web Documentation at http://moosend.com/api/lists#SaveCustomField */
        UpdateCustomField: function (updateCustomFieldForm, callback) {
            if (!updateCustomFieldForm) callback('UpdateCustomFieldForm is a required parameter when calling UpdateCustomField');
            else {
                var validation = updateCustomFieldForm.validate();
                if (!validation.valid) {
                    callback('The instance of UpdateCustomFieldForm provided is not valid. The following errors have been found: ' + validation.errors);
                } else {
                    _perfCall('/lists/' + updateCustomFieldForm.MailingListId + '/customfields/' + updateCustomFieldForm.Id + '/update.json', 'POST', updateCustomFieldForm, callback);
                }
            }
        },
        /* Removes a custom field definition from the specified mailing list. */
        /* Web Documentation at http://moosend.com/api/lists#RemoveCustomField */
        DeleteCustomField: function (id, mailingListId, callback) {
            if (!id) callback('Id is a required parameter when calling DeleteCustomField');
            else if (!mailingListId) callback('MailingListID is a required parameter when calling DeleteCustomField');
            else {
                _perfCall('/lists/' + mailingListId + '/customfields/' + id + '/delete.json', 'DELETE', callback);
            }
        }
    }
}
