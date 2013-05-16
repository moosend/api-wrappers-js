var AddSubscriberForm = function(mailingListId, email, name, customFields) {
	this.Name = name;
  this.Email = email;
  this.CustomFields = customFields;
  this.MailingListId = mailingListId;

  if (!this.CustomFields) this.CustomFields = new Object();
};

AddSubscriberForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.Email) { 
    validation.valid = false;
    validation.errors.push('Email is a required parameter for CreateCustomFieldForm object');
  }
  if (!this.MailingListId) { 
    validation.valid = false;
    validation.errors.push('MailingListId is a required parameter for CreateCustomFieldForm object');
  }

  return validation;
};