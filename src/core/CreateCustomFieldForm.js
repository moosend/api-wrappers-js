var CreateCustomFieldForm = function(name, mailingListId, customFieldType, options, isRequired) {
	this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

CreateCustomFieldForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.Name) { 
    validation.valid = false;
    validation.errors.push('Name is a required parameter for CreateCustomFieldForm object');
  }
  if (!this.MailingListId) { 
    validation.valid = false;
    validation.errors.push('MailingListId is a required parameter for CreateCustomFieldForm object');
  }

  return validation;
};