var UpdateCustomFieldForm = function(id, name, mailingListId, customFieldType, options, isRequired) {
	this.Id = id;
  this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

UpdateCustomFieldForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.Id) { 
    validation.valid = false;
    validation.errors.push('Id is a required parameter for UpdateCustomFieldForm object');
  }
  if (!this.MailingListID) { 
    validation.valid = false;
    validation.errors.push('MailingListID is a required parameter for UpdateCustomFieldForm object');
  }

  return validation;
};