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
<script src="/file-path-to/api.js"></script>
```

Examples
=======

Wrapper Examples

Subscribers

- Subscribe

```javascript
	var mailingListId = '0000-00000-000000-0000';
	var subscriberName = 'John Doe';
	var subscriberEmail = 'john.doe@some-domain.com';
	AddSubscriberForm subscriberForm = new AddSubscriberForm(mailingListId, subscriberEmail, subscriberName);
	subscriberForm.CustomFields.Age=45;
	subscriberForm.CustomFields.Country=USA;

	MoosendAPI.Subscribers.Subscribe(subscriberForm, function(error, response) {
		if (error) alert(error);
		else alert(JSON.stringify(response));
	});
```

- Unsubscribe

```javascript
	var mailingListId = '0000-00000-000000-0000';
	var subscriberEmail = 'john.doe@some-domain.com';
	
	MoosendAPI.Subscribers.Unsubscribe(mailingListId, subscriberEmail, function(error, response) {
		if (error) alert(error);
		else alert(JSON.stringify(response));
	});
```

Lists

- Get all

- Get all subscribers

- Create

- Get One

Campaigns

- Create

- Send test

- Send

- Get with statistics