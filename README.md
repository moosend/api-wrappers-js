# Moosend Javascript Wrapper

The following project is a Javascript implementation of the Moosend V3 API.
You can find the API documentation at http://docs.moosendapp.apiary.io/#

## Installation

```shell
npm install moosend-api --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MoosendApi = require('moosend-api');

var api = new MoosendApi.CampaignsApi()

var format = "format_example"; // {String} 

var apikey = "apikey_example"; // {String} You may find your API Key or generate a new one in your account settings.

var campaignID = "campaignID_example"; // {String} The ID of the requested AB test campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.aBTestCampaignSummary(format, apikey, campaignID, callback);

```

## Documentation for API Endpoints

## *CampaignsApi*
Class | Method 
------------ | ------------- 
[**GetAllCampaigns**](docs/CampaignsApi.md#getallcampaigns) | Returns a list of all campaigns in your account with detailed information.  
[**GetCampaignsByPage**](docs/CampaignsApi.md#getcampaignsbypage) | Returns a list of all campaigns in your account with detailed information, paging information is required as input.
[**GetCampaignsByPageAndPagesize**](docs/CampaignsApi.md#getcampaignsbypageandpagesize) | Returns a list of all campaigns in your account with detailed information, paging information is required as input.
[**GettingCampaignDetails**](docs/CampaignsApi.md#gettingcampaigndetails) | Returns a complete set of properties that describe the requested campaign in detail.  
[**GettingSenderDetails**](docs/CampaignsApi.md#gettingsenderdetails) | Returns basic information for the specified sender identified by its email address.
[**CloningAnExistingCampaign**](docs/CampaignsApi.md#cloninganexistingcampaign) | Creates an exact copy of an existing campaign. The new campaign is created as a draft.
[**CreatingADraftCampaign**](docs/CampaignsApi.md#creatingadraftcampaign) | Creates a new campaign in your account. This method does not send the campaign, but rather creates it as a draft, ready for sending or testing. 
[**UpdatingADraftCampaign**](docs/CampaignsApi.md#updatingadraftcampaign) | Updates properties of an existing draft A/B campaign in your account. Non-draft campaigns cannot be updated. 
[**DeletingACampaign**](docs/CampaignsApi.md#deletingacampaign) | Deletes a campaign from your account, draft or even sent.
[**TestingACampaign**](docs/CampaignsApi.md#testingacampaign) | Sends a test email of a draft campaign to a list of email addresses you specify for previewing.
[**SendingACampaign**](docs/CampaignsApi.md#sendingacampaign) | Sends an existing draft campaign to all recipients specified in its mailing list. The campaign is sent immediatelly.
[**ABTestCampaignSummary**](docs/CampaignsApi.md#abtestcampaignsummary) |  Provides a basic summary of the results for a sent AB test campaign, separately for each version (A and B), such as the number of recipients, opens, clicks, bounces, unsubscribes, forwards etc to date.
[**ActivityByLocation**](docs/CampaignsApi.md#activitybylocation) |  Returns a detailed report of your campaign opens (unique and total) by country.
[**CampaignSummary**](docs/CampaignsApi.md#campaignsummary) | Provides a basic summary of the results for any sent campaign such as the number of recipients, opens, clicks, bounces, unsubscribes, forwards etc. to date.
[**GettingAllYourSenders**](docs/CampaignsApi.md#gettingallyoursenders) | Gets a list of your active senders in your account. You may specify any email address of these senders when sending a campaign.
[**LinkActivity**](docs/CampaignsApi.md#linkactivity) | Returns a list with your campaign links and how many clicks have been made by your recipients, either unique or total.
[**SchedulingACampaign**](docs/CampaignsApi.md#schedulingacampaign) | Assigns a scheduled date and time at which the campaign will be delivered.
[**UnschedulingACampaign**](docs/CampaignsApi.md#unschedulingacampaign) | Removes a previously defined scheduled date and time from a campaign, so that it will be delivered immediately if already queued or when sent.

## *MailingListsApi*
Class | Method 
------------ | ------------- 
[**CreatingACustomField**](docs/MailingListsApi.md#creatingacustomfield) | Creates a new custom field in the specified mailing list.
[**CreatingAMailingList**](docs/MailingListsApi.md#creatingamailinglist) | Creates a new empty mailing list in your account.
[**DeletingAMailingList**](docs/MailingListsApi.md#deletingamailinglist) | Deletes a mailing list from your account.
[**GettingAllActiveMailingLists**](docs/MailingListsApi.md#gettingallactivemailinglists) | Gets a list of your active mailing lists in your account.
[**GettingAllActiveMailingListsWithPaging**](docs/MailingListsApi.md#gettingallactivemailinglistswithpaging) | Gets a list of your active mailing lists in your account. Because the results for this call could be quite big, paging information is required as input.
[**GettingMailingListDetails**](docs/MailingListsApi.md#gettingmailinglistdetails) | Gets details for a given mailing list. You may include subscriber statistics in your results or not. Any segments existing for the requested mailing list will not be included in the results.
[**RemovingACustomField**](docs/MailingListsApi.md#removingacustomfield) | Removes a custom field definition from the specified mailing list.
[**UpdatingACustomField**](docs/MailingListsApi.md#updatingacustomfield) | Updates the properties of an existing custom field in the specified mailing list.
[**UpdatingAMailingList**](docs/MailingListsApi.md#updatingamailinglist) | Updates the properties of an existing mailing list.

## *SegmentsApi*
Class | Method 
------------ | ------------- 
[**GettingSegments**](docs/SegmentsApi.md#gettingsegments) | Get a list of all segments with their criteria for the given mailing list.
[**GettingSegmentDetails**](docs/SegmentsApi.md#gettingsegmentdetails) | Gets detailed information on a specific segment and its criteria. However, it does not include the subscribers returned by the segment.
[**GettingSegmentSubscribers**](docs/SegmentsApi.md#gettingsegmentsubscribers) | Gets a list of the subscribers that the specified segment returns according to its criteria. Because the results for this call could be quite big, paging information is required as input.
[**CreatingANewSegment**](docs/SegmentsApi.md#creatinganewsegment) | Creates a new empty segment (without criteria) for the given mailing list. You may specify the name of the segment and the way the criteria will match together.
[**UpdatingASegment**](docs/SegmentsApi.md#updatingasegment) | Updates the properties of an existing segment. You may update the name and match type of the segment.
[**AddingCriteriaToSegments**](docs/SegmentsApi.md#addingcriteriatosegments) | Adds a new criterion (a rule) to the specified segment.
[**UpdatingSegmentCriteria**](docs/SegmentsApi.md#updatingsegmentcriteria) | Updates an existing criterion in the specified segment.
[**DeletingASegment**](docs/SegmentsApi.md#deletingasegment) | Deletes a segment along with its criteria from the mailing list. The subscribers of the mailing list that the segment returned are not deleted or affected in any way.

## *SubscribersApi*
Class | Method 
------------ | ------------- 
[**GettingSubscribers**](docs/SubscribersApi.md#gettingsubscribers) | Gets a list of all subscribers in a given mailing list. You may filter the list by setting a date to fetch those subscribed since then and/or by their status. 
[**GetSubscriberByEmailAddress**](docs/SubscribersApi.md#getsubscriberbyemailaddress) | Searches for a subscriber with the specified email address in the specified mailing list.
[**GetSubscriberById**](docs/SubscribersApi.md#getsubscriberbyid) | Searches for a subscriber with the specified unique id in the specified mailing list
[**AddingSubscribers**](docs/SubscribersApi.md#addingsubscribers) | Adds a new subscriber to the specified mailing list. If there is already a subscriber with the specified email address in the list, an update will be performed instead.
[**AddingMultipleSubscribers**](docs/SubscribersApi.md#addingmultiplesubscribers) | This method allows you to add multiple subscribers in a mailing list with a single call. If some subscribers already exist with the given email addresses, they will be updated. 
[**UpdatingASubscriber**](docs/SubscribersApi.md#updatingasubscriber) | Updates a subscriber in the specified mailing list. You can even update the subscribers email, if he has not unsubscribed.
[**UnsubscribingSubscribersFromAccount**](docs/SubscribersApi.md#unsubscribingsubscribersfromaccount) | Unsubscribes a subscriber from the account.
[**UnsubscribingSubscribersFromMailingList**](docs/SubscribersApi.md#unsubscribingsubscribersfrommailinglist) | Unsubscribes a subscriber from the specified mailing list. The subscriber is not deleted, but moved to the suppression list.
[**UnsubscribingSubscribersFromMailingListAndASpecifiedCampaign**](docs/SubscribersApi.md#unsubscribingsubscribersfrommailinglistandaspecifiedcampaign) | Unsubscribes a subscriber from the specified mailing list and the specified campaign. The subscriber is not deleted, but moved to the suppression list. 
[**RemovingASubscriber**](docs/SubscribersApi.md#removingasubscriber) | Removes a subscriber from the specified mailing list permanently (without moving to the suppression list).
[**RemovingMultipleSubscribers**](docs/SubscribersApi.md#removingmultiplesubscribers) | Removes a list of subscribers from the specified mailing list permanently (without putting them in the suppression list). Any invalid email addresses specified will be ignored.

## Documentation for Models

 - [MoosendApi.A](docs/A.md)
 - [MoosendApi.ABCampaignData](docs/ABCampaignData.md)
 - [MoosendApi.AbTestCampaignSummaryResponse](docs/AbTestCampaignSummaryResponse.md)
 - [MoosendApi.ActivityByLocationResponse](docs/ActivityByLocationResponse.md)
 - [MoosendApi.AddingCriteriaToSegmentsRequest](docs/AddingCriteriaToSegmentsRequest.md)
 - [MoosendApi.AddingCriteriaToSegmentsResponse](docs/AddingCriteriaToSegmentsResponse.md)
 - [MoosendApi.AddingMultipleSubscribersRequest](docs/AddingMultipleSubscribersRequest.md)
 - [MoosendApi.AddingMultipleSubscribersResponse](docs/AddingMultipleSubscribersResponse.md)
 - [MoosendApi.AddingSubscribersRequest](docs/AddingSubscribersRequest.md)
 - [MoosendApi.AddingSubscribersResponse](docs/AddingSubscribersResponse.md)
 - [MoosendApi.Analytic](docs/Analytic.md)
 - [MoosendApi.B](docs/B.md)
 - [MoosendApi.Campaign](docs/Campaign.md)
 - [MoosendApi.CampaignSummaryResponse](docs/CampaignSummaryResponse.md)
 - [MoosendApi.CloningAnExistingCampaignResponse](docs/CloningAnExistingCampaignResponse.md)
 - [MoosendApi.Context](docs/Context.md)
 - [MoosendApi.Context110](docs/Context110.md)
 - [MoosendApi.Context118](docs/Context118.md)
 - [MoosendApi.Context132](docs/Context132.md)
 - [MoosendApi.Context140](docs/Context140.md)
 - [MoosendApi.Context145](docs/Context145.md)
 - [MoosendApi.Context148](docs/Context148.md)
 - [MoosendApi.Context17](docs/Context17.md)
 - [MoosendApi.Context32](docs/Context32.md)
 - [MoosendApi.Context37](docs/Context37.md)
 - [MoosendApi.Context52](docs/Context52.md)
 - [MoosendApi.Context64](docs/Context64.md)
 - [MoosendApi.Context66](docs/Context66.md)
 - [MoosendApi.Context72](docs/Context72.md)
 - [MoosendApi.Context84](docs/Context84.md)
 - [MoosendApi.Context89](docs/Context89.md)
 - [MoosendApi.Context93](docs/Context93.md)
 - [MoosendApi.CreatingACustomFieldRequest](docs/CreatingACustomFieldRequest.md)
 - [MoosendApi.CreatingACustomFieldResponse](docs/CreatingACustomFieldResponse.md)
 - [MoosendApi.CreatingADraftCampaignRequest](docs/CreatingADraftCampaignRequest.md)
 - [MoosendApi.CreatingADraftCampaignResponse](docs/CreatingADraftCampaignResponse.md)
 - [MoosendApi.CreatingAMailingListRequest](docs/CreatingAMailingListRequest.md)
 - [MoosendApi.CreatingAMailingListResponse](docs/CreatingAMailingListResponse.md)
 - [MoosendApi.CreatingANewSegmentRequest](docs/CreatingANewSegmentRequest.md)
 - [MoosendApi.CreatingANewSegmentResponse](docs/CreatingANewSegmentResponse.md)
 - [MoosendApi.Criterion](docs/Criterion.md)
 - [MoosendApi.CustomField](docs/CustomField.md)
 - [MoosendApi.CustomField53](docs/CustomField53.md)
 - [MoosendApi.CustomFieldsDefinition](docs/CustomFieldsDefinition.md)
 - [MoosendApi.DeletingACampaignResponse](docs/DeletingACampaignResponse.md)
 - [MoosendApi.DeletingAMailingListResponse](docs/DeletingAMailingListResponse.md)
 - [MoosendApi.DeletingASegmentResponse](docs/DeletingASegmentResponse.md)
 - [MoosendApi.Format](docs/Format.md)
 - [MoosendApi.GetAllCampaignsResponse](docs/GetAllCampaignsResponse.md)
 - [MoosendApi.GetCampaignStatisticsResponse](docs/GetCampaignStatisticsResponse.md)
 - [MoosendApi.GetCampaignStatisticsWithPagingFilteredResponse](docs/GetCampaignStatisticsWithPagingFilteredResponse.md)
 - [MoosendApi.GetCampaignsByPageAndPagesizeResponse](docs/GetCampaignsByPageAndPagesizeResponse.md)
 - [MoosendApi.GetCampaignsByPageResponse](docs/GetCampaignsByPageResponse.md)
 - [MoosendApi.GetSubscriberByEmailAddressResponse](docs/GetSubscriberByEmailAddressResponse.md)
 - [MoosendApi.GetSubscriberByIdResponse](docs/GetSubscriberByIdResponse.md)
 - [MoosendApi.GettingAllActiveMailingListsResponse](docs/GettingAllActiveMailingListsResponse.md)
 - [MoosendApi.GettingAllActiveMailingListsWithPagingResponse](docs/GettingAllActiveMailingListsWithPagingResponse.md)
 - [MoosendApi.GettingAllYourSendersResponse](docs/GettingAllYourSendersResponse.md)
 - [MoosendApi.GettingCampaignDetailsResponse](docs/GettingCampaignDetailsResponse.md)
 - [MoosendApi.GettingMailingListDetailsResponse](docs/GettingMailingListDetailsResponse.md)
 - [MoosendApi.GettingSegmentDetailsResponse](docs/GettingSegmentDetailsResponse.md)
 - [MoosendApi.GettingSegmentSubscribersResponse](docs/GettingSegmentSubscribersResponse.md)
 - [MoosendApi.GettingSegmentsResponse](docs/GettingSegmentsResponse.md)
 - [MoosendApi.GettingSenderDetailsResponse](docs/GettingSenderDetailsResponse.md)
 - [MoosendApi.GettingSubscribersResponse](docs/GettingSubscribersResponse.md)
 - [MoosendApi.ImportOperation](docs/ImportOperation.md)
 - [MoosendApi.ImportOperation19](docs/ImportOperation19.md)
 - [MoosendApi.LinkActivityResponse](docs/LinkActivityResponse.md)
 - [MoosendApi.MailingList](docs/MailingList.md)
 - [MoosendApi.MailingList68](docs/MailingList68.md)
 - [MoosendApi.MailingList69](docs/MailingList69.md)
 - [MoosendApi.MailingList85](docs/MailingList85.md)
 - [MoosendApi.MailingLists](docs/MailingLists.md)
 - [MoosendApi.MailingLists119](docs/MailingLists119.md)
 - [MoosendApi.MailingLists134](docs/MailingLists134.md)
 - [MoosendApi.Paging](docs/Paging.md)
 - [MoosendApi.Paging76](docs/Paging76.md)
 - [MoosendApi.RemovingACustomFieldResponse](docs/RemovingACustomFieldResponse.md)
 - [MoosendApi.RemovingASubscriberRequest](docs/RemovingASubscriberRequest.md)
 - [MoosendApi.RemovingASubscriberResponse](docs/RemovingASubscriberResponse.md)
 - [MoosendApi.RemovingMultipleSubscribersRequest](docs/RemovingMultipleSubscribersRequest.md)
 - [MoosendApi.RemovingMultipleSubscribersResponse](docs/RemovingMultipleSubscribersResponse.md)
 - [MoosendApi.ReplyToEmail](docs/ReplyToEmail.md)
 - [MoosendApi.SchedulingACampaignRequest](docs/SchedulingACampaignRequest.md)
 - [MoosendApi.SchedulingACampaignResponse](docs/SchedulingACampaignResponse.md)
 - [MoosendApi.Segment](docs/Segment.md)
 - [MoosendApi.Sender](docs/Sender.md)
 - [MoosendApi.SendingACampaignResponse](docs/SendingACampaignResponse.md)
 - [MoosendApi.ShortBy](docs/ShortBy.md)
 - [MoosendApi.SortMethod](docs/SortMethod.md)
 - [MoosendApi.Status](docs/Status.md)
 - [MoosendApi.Subscriber](docs/Subscriber.md)
 - [MoosendApi.Subscribers](docs/Subscribers.md)
 - [MoosendApi.Subscribers150](docs/Subscribers150.md)
 - [MoosendApi.TestingACampaignRequest](docs/TestingACampaignRequest.md)
 - [MoosendApi.TestingACampaignResponse](docs/TestingACampaignResponse.md)
 - [MoosendApi.Type](docs/Type.md)
 - [MoosendApi.UnschedulingACampaignResponse](docs/UnschedulingACampaignResponse.md)
 - [MoosendApi.UnsubscribingSubscribersFromAccountRequest](docs/UnsubscribingSubscribersFromAccountRequest.md)
 - [MoosendApi.UnsubscribingSubscribersFromAccountResponse](docs/UnsubscribingSubscribersFromAccountResponse.md)
 - [MoosendApi.UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest](docs/UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignRequest.md)
 - [MoosendApi.UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignResponse](docs/UnsubscribingSubscribersFromMailingListAndASpecifiedCampaignResponse.md)
 - [MoosendApi.UnsubscribingSubscribersFromMailingListRequest](docs/UnsubscribingSubscribersFromMailingListRequest.md)
 - [MoosendApi.UnsubscribingSubscribersFromMailingListResponse](docs/UnsubscribingSubscribersFromMailingListResponse.md)
 - [MoosendApi.UpdatingACustomFieldRequest](docs/UpdatingACustomFieldRequest.md)
 - [MoosendApi.UpdatingACustomFieldResponse](docs/UpdatingACustomFieldResponse.md)
 - [MoosendApi.UpdatingADraftCampaignRequest](docs/UpdatingADraftCampaignRequest.md)
 - [MoosendApi.UpdatingADraftCampaignResponse](docs/UpdatingADraftCampaignResponse.md)
 - [MoosendApi.UpdatingAMailingListRequest](docs/UpdatingAMailingListRequest.md)
 - [MoosendApi.UpdatingAMailingListResponse](docs/UpdatingAMailingListResponse.md)
 - [MoosendApi.UpdatingASegmentRequest](docs/UpdatingASegmentRequest.md)
 - [MoosendApi.UpdatingASegmentResponse](docs/UpdatingASegmentResponse.md)
 - [MoosendApi.UpdatingASubscriberRequest](docs/UpdatingASubscriberRequest.md)
 - [MoosendApi.UpdatingASubscriberResponse](docs/UpdatingASubscriberResponse.md)
 - [MoosendApi.UpdatingSegmentCriteriaRequest](docs/UpdatingSegmentCriteriaRequest.md)
 - [MoosendApi.UpdatingSegmentCriteriaResponse](docs/UpdatingSegmentCriteriaResponse.md)
 - [MoosendApi.WithStatistics](docs/WithStatistics.md)

