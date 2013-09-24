var UpdateCustomFieldForm = function(id, name, mailingListId, customFieldType, options, isRequired) {
  this.Id = id;
  this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

UpdateCustomFieldForm.prototype.validate = function () {
    var validation = { valid: true, errors: [] };
    if (!this.Id) {
        validation.valid = false;
        validation.errors.push('Id is a required parameter for UpdateCustomFieldForm object');
    }
    if (!this.MailingListId) {
        validation.valid = false;
        validation.errors.push('MailingListID is a required parameter for UpdateCustomFieldForm object');
    }
    if (this.CustomFieldType == 3) {
        if (!this.Options || this.Options.length == 0) {
            validation.valid = false;
            validation.errors.push('UpdateCustomFieldForm must have some options when CustomFieldType == 3');
        }
    }
    return validation;
};