var revalidator = require('revalidator');

CreateCustomFieldForm = function(name, mailingListId, customFieldType, options, isRequired) {
	this.Name = name;
  this.Options = options;
  this.IsRequired = isRequired;
  this.MailingListId = mailingListId;
  this.CustomFieldType = customFieldType;
};

CreateCustomFieldForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        Name: {
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

exports.CreateCustomFieldForm = CreateCustomFieldForm;