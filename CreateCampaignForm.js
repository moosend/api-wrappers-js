var revalidator = require('revalidator');

CreateCampaignForm = function(name, subject, senderEmail, mailingListId, webLocation) {
	this.Name = name;
  this.Subject = subject;
  this.SenderEmail = senderEmail;
  this.WebLocation = webLocation;
  this.MailingListId = mailingListId;
};

CreateCampaignForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        Name: {
          description: 'Name is a required parameter for CreateCampaignForm object',
          required: true
        },
        Subject: {
          description: 'Subject is a required parameter for CreateCampaignForm object',
          required: true
        },
        SenderEmail: {
          description: 'SenderEmail is a required parameter for CreateCampaignForm object',
          required: true
        },
        MailingListId: {
          description: 'MailingListID is a required parameter for CreateCampaignForm object',
          required: true
        },
        WebLocation: {
          description: 'WebLocation is a required parameter for CreateCampaignForm object',
          required: true
        },
      }
  })
};

exports.CreateCampaignForm = CreateCampaignForm;