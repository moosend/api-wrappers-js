var revalidator = require('revalidator');

TestCampaignForm = function(campaignId, testEmails) {
	this.CampaignId = campaignId;
  this.TestEmails = testEmails;
};

TestCampaignForm.prototype.validate = function() {
  return revalidator.validate(this, {
    properties: {
        CampaignId: {
          description: 'CampaignId is a required parameter for TestCampaignForm object',
          required: true
        },
        TestEmails: {
          description: 'TestEmails is a required parameter for TestCampaignForm object',
          required: true
        }
      }
  })
};

exports.TestCampaignForm = TestCampaignForm;