var revalidator = require('revalidator');

AddSubscriberForm = function(mailingListId, email, name, customFields) {
	this.Name = name;
  this.Email = email;
  this.CustomFields = customFields;
  this.MailingListId = mailingListId;

  if (!this.CustomFields) this.CustomFields = new Object();
};

AddSubscriberForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        Email: {
          description: 'Name is a required parameter for CreateCustomFieldForm object',
          required: true
        },
        MailingListId: {
          description: 'MailingListID is a required parameter for CreateCustomFieldForm object',
          required: true
        },
      }
  })
};

exports.AddSubscriberForm = AddSubscriberForm;