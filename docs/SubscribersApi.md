# MoosendApi.SubscribersApi

All URIs are relative to *https://api.moosend.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addingMultipleSubscribers**](SubscribersApi.md#addingMultipleSubscribers) | **POST** /subscribers/{MailingListID}/subscribe_many.{Format} | Adding multiple subscribers
[**addingSubscribers**](SubscribersApi.md#addingSubscribers) | **POST** /subscribers/{MailingListID}/subscribe.{Format} | Adding subscribers
[**getSubscriberByEmailAddress**](SubscribersApi.md#getSubscriberByEmailAddress) | **GET** /subscribers/{MailingListID}/view.{Format} | Get subscriber by email address
[**getSubscriberById**](SubscribersApi.md#getSubscriberById) | **GET** /subscribers/{MailingListID}/find/{SubscriberID}.{Format} | Get subscriber by id
[**gettingSubscribers**](SubscribersApi.md#gettingSubscribers) | **GET** /lists/{MailingListID}/subscribers/{Status}.{Format} | Getting subscribers
[**removingASubscriber**](SubscribersApi.md#removingASubscriber) | **POST** /subscribers/{MailingListID}/remove.{Format} | Removing a subscriber
[**removingMultipleSubscribers**](SubscribersApi.md#removingMultipleSubscribers) | **POST** /subscribers/{MailingListID}/remove_many.{Format} | Removing multiple subscribers
[**unsubscribingSubscribersFromAccount**](SubscribersApi.md#unsubscribingSubscribersFromAccount) | **POST** /subscribers/unsubscribe.{Format} | Unsubscribing subscribers from account
[**unsubscribingSubscribersFromMailingList**](SubscribersApi.md#unsubscribingSubscribersFromMailingList) | **POST** /subscribers/{MailingListID}/unsubscribe.{Format} | Unsubscribing subscribers from mailing list
[**unsubscribingSubscribersFromMailingListAndASpecifiedCampaign**](SubscribersApi.md#unsubscribingSubscribersFromMailingListAndASpecifiedCampaign) | **POST** /subscribers/{MailingListID}/{CampaignID}/unsubscribe.{Format} | Unsubscribing subscribers from mailing list and a specified campaign
[**updatingASubscriber**](SubscribersApi.md#updatingASubscriber) | **POST** /subscribers/{MailingListID}/update/{SubscriberID}.{Format} | Updating a subscriber


<a name="addingMultipleSubscribers"></a>
# **addingMultipleSubscribers**
> AddingMultipleSubscribersResponse addingMultipleSubscribers(format, apikey, mailingListID, body)

Adding multiple subscribers

This method allows you to add multiple subscribers in a mailing list with a single call. If some subscribers already exist with the given email addresses, they will be updated. If you try to add a subscriber with an invalid email address, this attempt will be ignored, as the process will skip to the next subscriber automatically.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to add subscribers to.

var body = new MoosendApi.AddingMultipleSubscribersRequest(); // AddingMultipleSubscribersRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addingMultipleSubscribers(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to add subscribers to. | 
 **body** | [**AddingMultipleSubscribersRequest**](AddingMultipleSubscribersRequest.md)|  | 

### Return type

[**AddingMultipleSubscribersResponse**](AddingMultipleSubscribersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addingSubscribers"></a>
# **addingSubscribers**
> AddingSubscribersResponse addingSubscribers(format, mailingListID, apikey, body)

Adding subscribers

Adds a new subscriber to the specified mailing list. If there is already a subscriber with the specified email address in the list, an update will be performed instead.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to add the new member.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var body = new MoosendApi.AddingSubscribersRequest(); // AddingSubscribersRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addingSubscribers(format, mailingListID, apikey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list to add the new member. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **body** | [**AddingSubscribersRequest**](AddingSubscribersRequest.md)|  | 

### Return type

[**AddingSubscribersResponse**](AddingSubscribersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriberByEmailAddress"></a>
# **getSubscriberByEmailAddress**
> GetSubscriberByEmailAddressResponse getSubscriberByEmailAddress(format, apikey, mailingListID, email)

Get subscriber by email address

Searches for a subscriber with the specified email address in the specified mailing list and returns detailed information such as id, name, date created, date unsubscribed, status and custom fields

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list where the subscriber belongs.

var email = "email_example"; // String | The email of the subscriber.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberByEmailAddress(format, apikey, mailingListID, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list where the subscriber belongs. | 
 **email** | **String**| The email of the subscriber. | 

### Return type

[**GetSubscriberByEmailAddressResponse**](GetSubscriberByEmailAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscriberById"></a>
# **getSubscriberById**
> GetSubscriberByIdResponse getSubscriberById(format, apikey, mailingListID, subscriberID)

Get subscriber by id

Searches for a subscriber with the specified unique id in the specified mailing list and returns detailed information such as email, name, date created, date unsubscribed, status and custom fields.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to search the subscriber in.

var subscriberID = "subscriberID_example"; // String | The id of the subscriber being searched.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscriberById(format, apikey, mailingListID, subscriberID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to search the subscriber in. | 
 **subscriberID** | **String**| The id of the subscriber being searched. | 

### Return type

[**GetSubscriberByIdResponse**](GetSubscriberByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingSubscribers"></a>
# **gettingSubscribers**
> GettingSubscribersResponse gettingSubscribers(format, mailingListID, apikey, status, opts)

Getting subscribers

Gets a list of all subscribers in a given mailing list. You may filter the list by setting a date to fetch those subscribed since then and/or by their status. Because the results for this call could be quite big, paging information is required as input.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list where the subscribers belong.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var status = "status_example"; // String | Specifies what type of subscriber statistics results will be returned.

var opts = { 
  'page': 1.2, // Number | Specifies the page of subscriber statistics results will be returned.
  'pageSize': 1.2 // Number | Specifies the page size of subscriber statistics results will be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingSubscribers(format, mailingListID, apikey, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list where the subscribers belong. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **status** | **String**| Specifies what type of subscriber statistics results will be returned. | 
 **page** | **Number**| Specifies the page of subscriber statistics results will be returned. | [optional] 
 **pageSize** | **Number**| Specifies the page size of subscriber statistics results will be returned. | [optional] 

### Return type

[**GettingSubscribersResponse**](GettingSubscribersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removingASubscriber"></a>
# **removingASubscriber**
> RemovingASubscriberResponse removingASubscriber(format, apikey, mailingListID, body)

Removing a subscriber

Removes a subscriber from the specified mailing list permanently (without moving to the suppression list).

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to remove the subscriber from.

var body = new MoosendApi.RemovingASubscriberRequest(); // RemovingASubscriberRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removingASubscriber(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to remove the subscriber from. | 
 **body** | [**RemovingASubscriberRequest**](RemovingASubscriberRequest.md)|  | 

### Return type

[**RemovingASubscriberResponse**](RemovingASubscriberResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removingMultipleSubscribers"></a>
# **removingMultipleSubscribers**
> RemovingMultipleSubscribersResponse removingMultipleSubscribers(format, apikey, mailingListID, body)

Removing multiple subscribers

Removes a list of subscribers from the specified mailing list permanently (without putting them in the suppression list). Any invalid email addresses specified will be ignored.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to remove the subscribers from.

var body = new MoosendApi.RemovingMultipleSubscribersRequest(); // RemovingMultipleSubscribersRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removingMultipleSubscribers(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to remove the subscribers from. | 
 **body** | [**RemovingMultipleSubscribersRequest**](RemovingMultipleSubscribersRequest.md)|  | 

### Return type

[**RemovingMultipleSubscribersResponse**](RemovingMultipleSubscribersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unsubscribingSubscribersFromAccount"></a>
# **unsubscribingSubscribersFromAccount**
> UnsubscribingSubscribersFromAccountResponse unsubscribingSubscribersFromAccount(format, apikey, body)

Unsubscribing subscribers from account

Unsubscribes a subscriber from the account.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var body = new MoosendApi.UnsubscribingSubscribersFromAccountRequest(); // UnsubscribingSubscribersFromAccountRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unsubscribingSubscribersFromAccount(format, apikey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **body** | [**UnsubscribingSubscribersFromAccountRequest**](UnsubscribingSubscribersFromAccountRequest.md)|  | 

### Return type

[**UnsubscribingSubscribersFromAccountResponse**](UnsubscribingSubscribersFromAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unsubscribingSubscribersFromMailingList"></a>
# **unsubscribingSubscribersFromMailingList**
> UnsubscribingSubscribersFromMailingListResponse unsubscribingSubscribersFromMailingList(format, apikey, mailingListID, body)

Unsubscribing subscribers from mailing list

Unsubscribes a subscriber from the specified mailing list. The subscriber is not deleted, but moved to the suppression list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to add subscribers to.

var body = new MoosendApi.UnsubscribingSubscribersFromMailingListRequest(); // UnsubscribingSubscribersFromMailingListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unsubscribingSubscribersFromMailingList(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to add subscribers to. | 
 **body** | [**UnsubscribingSubscribersFromMailingListRequest**](UnsubscribingSubscribersFromMailingListRequest.md)|  | 

### Return type

[**UnsubscribingSubscribersFromMailingListResponse**](UnsubscribingSubscribersFromMailingListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unsubscribingSubscribersFromMailingListAndASpecifiedCampaign"></a>
# **unsubscribingSubscribersFromMailingListAndASpecifiedCampaign**
> UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignResponse unsubscribingSubscribersFromMailingListAndASpecifiedCampaign(format, campaignID, apikey, mailingListID, body)

Unsubscribing subscribers from mailing list and a specified campaign

Unsubscribes a subscriber from the specified mailing list and the specified campaign. The subscriber is not deleted, but moved to the suppression list.  This call will take into account the setting you have in \&quot;suppression list and unsubscribe settings\&quot; and will remove the subscriber from all other mailing lists or not accordingly.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var campaignID = "campaignID_example"; // String | The ID of the campaign that was sent to the specific mailing list.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to remove the subscriber from.

var body = new MoosendApi.UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest(); // UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unsubscribingSubscribersFromMailingListAndASpecifiedCampaign(format, campaignID, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **campaignID** | **String**| The ID of the campaign that was sent to the specific mailing list. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to remove the subscriber from. | 
 **body** | [**UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest**](UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest.md)|  | 

### Return type

[**UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignResponse**](UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatingASubscriber"></a>
# **updatingASubscriber**
> UpdatingASubscriberResponse updatingASubscriber(format, apikey, mailingListID, subscriberID, body)

Updating a subscriber

Updates a subscriber in the specified mailing list. You can even update the subscribers email, if he has not unsubscribed.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SubscribersApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list that contains the subscriber

var subscriberID = "subscriberID_example"; // String | The id of the subscriber to be updated

var body = new MoosendApi.UpdatingASubscriberRequest(); // UpdatingASubscriberRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatingASubscriber(format, apikey, mailingListID, subscriberID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list that contains the subscriber | 
 **subscriberID** | **String**| The id of the subscriber to be updated | 
 **body** | [**UpdatingASubscriberRequest**](UpdatingASubscriberRequest.md)|  | 

### Return type

[**UpdatingASubscriberResponse**](UpdatingASubscriberResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

