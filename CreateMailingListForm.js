var revalidator = require('revalidator');

CreateMailingListForm = function(name, confirmationPage, redirectAfterUnsubscribePage) {
	this.Name = name;
  this.ConfirmationPage = confirmationPage;
  this.RedirectAfterUnsubscribePage = redirectAfterUnsubscribePage;
};

CreateMailingListForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        Name: {
          description: 'The mailing list name is not provided',
          type: 'string',
          required: true
        }
      }
  })
};

exports.CreateMailingListForm = CreateMailingListForm;