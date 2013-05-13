var revalidator = require('revalidator');

UpdateCustomFieldForm = function(id, name, mailingListId, customFieldType, options, isRequired) {
	this.Id = id;
  this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

UpdateCustomFieldForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        Id: {
          description: 'Id is a required parameter for UpdateCustomFieldForm object',
          required: true
        },
        MailingListId: {
          description: 'MailingListID is a required parameter for UpdateCustomFieldForm object',
          required: true
        },
      }
  })
};

exports.UpdateCustomFieldForm = UpdateCustomFieldForm;