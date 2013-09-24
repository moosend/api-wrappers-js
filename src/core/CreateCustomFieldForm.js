var CreateCustomFieldForm = function(name, mailingListId, customFieldType, options, isRequired) {
	this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

CreateCustomFieldForm.prototype.validate = function () {
    var validation = { valid: true, errors: [] };
    if (!this.Name) {
        validation.valid = false;
        validation.errors.push('Name is a required parameter for CreateCustomFieldForm object');
    }
    if (!this.MailingListId) {
        validation.valid = false;
        validation.errors.push('MailingListId is a required parameter for CreateCustomFieldForm object');
    }
    if (this.CustomFieldType == 3) {
        if (!this.Options || this.Options.length == 0) {
            validation.valid = false;
            validation.errors.push('CreateCustomFieldForm must have some options when CustomFieldType == 3');
        }
    }
    return validation;
};