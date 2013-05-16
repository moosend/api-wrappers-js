Moosend Javascript API Wrapper
=======

Moosend Javascript API wrapper allows you to connect to the [Moosend](http://www.moosend.com) API and supports the operations listed below.

Mailing Lists

- List available mailing lists

- Retrieve mailing list details

- Create, update or delete mailing lists

- Create, update or delete custom fields

- Get Subscribers in a mailing list

Subsribers

- Retrieve subscriber details

- Add multiple subscribers

- Subscribe, Unsubscribe or Remove subscribers

Campaigns 

- List available campaigns

- Retrieve campaign details

- Create draft campaigns or clone existing campaigns

- Send a campaign test

- Send a draft campaign to the linked mailing list

- Retrieve statistics and performance metrics for a sent campaign



Usage
=======

To use, simply link the api.js in your html files and use the methods available to make requests. For more information you can follow the examples below.

```html
<script src="/file-path-to/moosend-min.js"></script>
```

Examples
=======

Wrapper Examples

Subscribers

- Subscribe

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';

	var mailingListId = 'YOUR_MAILING_LIST_ID';
	var subscriberName = 'John Doe';
	var subscriberEmail = 'john.doe@some-domain.com';

	var subscriber = new AddSubscriberForm(mailingListId, subscriberEmail, subscriberName);

	MoosendAPI.Subscribers.Subscribe(subscriber, function(error, response) {
		if (error) alert(error);
		else alert(JSON.stringify(response));
	});
```

- Unsubscribe

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';

	var mailingListId = '0000-00000-000000-0000';
	var subscriberEmail = 'john.doe@some-domain.com';
	
	MoosendAPI.Subscribers.Unsubscribe(mailingListId, subscriberEmail, function(error, response) {
		if (error) alert(error);
		else alert(JSON.stringify(response));
	});
```

Lists

- Get all

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';

	var page = 1;
	var pageSize = 10;

	MoosendAPI.MailingLists.GetMailingLists(page, pageSize, function(e, data) {
		if (e) alert(e);
		if (data) alert(JSON.stringify(data));
	});
```

- Get all subscribers

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';
	var mailingListId = 'YOUR_MAILING_LIST_ID';

	MoosendAPI.MailingLists.GetSubscribersForMailingList(mailingListId, 'Subscribed', function(e, data) {
			if (e) alert(e);
			if (data) alert(JSON.stringify(data));
	});
```

- Create

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';
	var mailingList = new CreateMailingListForm('Some new test list');

	MoosendAPI.MailingLists.Create(mailingList, function(e, data) {
		alert(e);
		alert(data);
	});
```

- Get One

```javascript
	MoosendAPI.ApiKey = 'YOUR_API_KEY';

	var mailingListId = 'YOUR_MAILING_LIST_ID';

	MoosendAPI.MailingLists.GetMailingListDetails(mailingListId, function(e, data) {
		if (e) alert(e);
		if (data) alert(JSON.stringify(data));
	});
```


Campaigns

- Create

- Send test

- Send

- Get with statistics