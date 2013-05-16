var CreateMailingListForm = function(name, confirmationPage, redirectAfterUnsubscribePage) {
	this.Name = name;
  this.ConfirmationPage = confirmationPage;
  this.RedirectAfterUnsubscribePage = redirectAfterUnsubscribePage;
};

CreateMailingListForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.Name) { 
    validation.valid = false;
    validation.errors.push('Name is a required parameter for CreateMailingListForm object');
  }
  return validation;
};