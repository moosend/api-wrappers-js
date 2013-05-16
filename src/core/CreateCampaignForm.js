var CreateCampaignForm = function(name, subject, senderEmail, mailingListId, webLocation) {
	this.Name = name;
  this.Subject = subject;
  this.SenderEmail = senderEmail;
  this.WebLocation = webLocation;
  this.MailingListId = mailingListId;
};

CreateCampaignForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.Name) { 
    validation.valid = false;
    validation.errors.push('Name is a required parameter for CreateCampaignForm object');
  }
  if (!this.Subject) { 
    validation.valid = false;
    validation.errors.push('Subject is a required parameter for CreateCampaignForm object');
  }
  if (!this.SenderEmail) { 
    validation.valid = false;
    validation.errors.push('SenderEmail is a required parameter for CreateCampaignForm object');
  }
  if (!this.MailingListID) { 
    validation.valid = false;
    validation.errors.push('MailingListID is a required parameter for CreateCampaignForm object');
  }
  if (!this.WebLocation) { 
    validation.valid = false;
    validation.errors.push('WebLocation is a required parameter for CreateCampaignForm object');
  }

  return validation;
};