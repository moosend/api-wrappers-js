var TestCampaignForm = function(campaignId, testEmails) {
	this.CampaignId = campaignId;
  this.TestEmails = testEmails;
};

TestCampaignForm.prototype.validate = function() {
  var validation = { valid: true, errors: [] };
  if (!this.CampaignId) { 
    validation.valid = false;
    validation.errors.push('CampaignId is a required parameter for TestCampaignForm object');
  }
  if (!this.TestEmails) { 
    validation.valid = false;
    validation.errors.push('TestEmails is a required parameter for TestCampaignForm object');
  }

  return validation;
};