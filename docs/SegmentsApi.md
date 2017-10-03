# MoosendApi.SegmentsApi

All URIs are relative to *https://api.moosend.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addingCriteriaToSegments**](SegmentsApi.md#addingCriteriaToSegments) | **POST** /lists/{MailingListID}/segments/{SegmentID}/criteria/add.{Format} | Adding criteria to segments
[**creatingANewSegment**](SegmentsApi.md#creatingANewSegment) | **POST** /lists/{MailingListID}/segments/create.{Format} | Creating a new segment
[**deletingASegment**](SegmentsApi.md#deletingASegment) | **DELETE** /lists/{MailingListID}/segments/{SegmentID}/delete.{Format} | Deleting A Segment
[**gettingSegmentDetails**](SegmentsApi.md#gettingSegmentDetails) | **GET** /lists/{MailingListID}/segments/{SegmentID}/details.{Format} | Getting segment details
[**gettingSegmentSubscribers**](SegmentsApi.md#gettingSegmentSubscribers) | **GET** /lists/{MailingListID}/segments/{SegmentID}/members.{Format} | Getting segment subscribers
[**gettingSegments**](SegmentsApi.md#gettingSegments) | **GET** /lists/{MailingListID}/segments.{Format} | Getting segments
[**updatingASegment**](SegmentsApi.md#updatingASegment) | **POST** /lists/{MailingListID}/segments/{SegmentID}/update.{Format} | Updating a segment
[**updatingSegmentCriteria**](SegmentsApi.md#updatingSegmentCriteria) | **POST** /lists/{MailingListID}/segments/{SegmentID}/criteria/{CriteriaID}/update.{Format} | Updating segment criteria


<a name="addingCriteriaToSegments"></a>
# **addingCriteriaToSegments**
> AddingCriteriaToSegmentsResponse addingCriteriaToSegments(format, mailingListID, apikey, segmentID, body)

Adding criteria to segments

Adds a new criterion (a rule) to the specified segment.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var segmentID = "segmentID_example"; // String | The ID of the segment to update.

var body = new MoosendApi.AddingCriteriaToSegmentsRequest(); // AddingCriteriaToSegmentsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addingCriteriaToSegments(format, mailingListID, apikey, segmentID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **segmentID** | **String**| The ID of the segment to update. | 
 **body** | [**AddingCriteriaToSegmentsRequest**](AddingCriteriaToSegmentsRequest.md)|  | 

### Return type

[**AddingCriteriaToSegmentsResponse**](AddingCriteriaToSegmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="creatingANewSegment"></a>
# **creatingANewSegment**
> CreatingANewSegmentResponse creatingANewSegment(format, mailingListID, apikey, body)

Creating a new segment

Creates a new empty segment (without criteria) for the given mailing list. You may specify the name of the segment and the way the criteria will match together.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var body = new MoosendApi.CreatingANewSegmentRequest(); // CreatingANewSegmentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatingANewSegment(format, mailingListID, apikey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **body** | [**CreatingANewSegmentRequest**](CreatingANewSegmentRequest.md)|  | 

### Return type

[**CreatingANewSegmentResponse**](CreatingANewSegmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletingASegment"></a>
# **deletingASegment**
> DeletingASegmentResponse deletingASegment(format, mailingListID, apikey, segmentID)

Deleting A Segment

Deletes a segment along with its criteria from the mailing list. The subscribers of the mailing list that the segment returned are not deleted or affected in any way.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var segmentID = "segmentID_example"; // String | The ID of the segment to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletingASegment(format, mailingListID, apikey, segmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **segmentID** | **String**| The ID of the segment to update. | 

### Return type

[**DeletingASegmentResponse**](DeletingASegmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingSegmentDetails"></a>
# **gettingSegmentDetails**
> GettingSegmentDetailsResponse gettingSegmentDetails(format, mailingListID, segmentID, apikey)

Getting segment details

Gets detailed information on a specific segment and its criteria. However, it does not include the subscribers returned by the segment.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs

var segmentID = "segmentID_example"; // String | The ID of the segment to fetch results for.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingSegmentDetails(format, mailingListID, segmentID, apikey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs | 
 **segmentID** | **String**| The ID of the segment to fetch results for. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 

### Return type

[**GettingSegmentDetailsResponse**](GettingSegmentDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingSegmentSubscribers"></a>
# **gettingSegmentSubscribers**
> GettingSegmentSubscribersResponse gettingSegmentSubscribers(format, mailingListID, segmentID, apikey)

Getting segment subscribers

Gets a list of the subscribers that the specified segment returns according to its criteria. Because the results for this call could be quite big, paging information is required as input.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs

var segmentID = "segmentID_example"; // String | The ID of the segment to fetch results for.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingSegmentSubscribers(format, mailingListID, segmentID, apikey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs | 
 **segmentID** | **String**| The ID of the segment to fetch results for. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 

### Return type

[**GettingSegmentSubscribersResponse**](GettingSegmentSubscribersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingSegments"></a>
# **gettingSegments**
> GettingSegmentsResponse gettingSegments(format, mailingListID, apikey)

Getting segments

Get a list of all segments with their criteria for the given mailing list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingSegments(format, mailingListID, apikey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 

### Return type

[**GettingSegmentsResponse**](GettingSegmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatingASegment"></a>
# **updatingASegment**
> UpdatingASegmentResponse updatingASegment(format, mailingListID, apikey, segmentID, body)

Updating a segment

Updates the properties of an existing segment. You may update the name and match type of the segment.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var segmentID = "segmentID_example"; // String | The ID of the segment to update.

var body = new MoosendApi.UpdatingASegmentRequest(); // UpdatingASegmentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatingASegment(format, mailingListID, apikey, segmentID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **segmentID** | **String**| The ID of the segment to update. | 
 **body** | [**UpdatingASegmentRequest**](UpdatingASegmentRequest.md)|  | 

### Return type

[**UpdatingASegmentResponse**](UpdatingASegmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatingSegmentCriteria"></a>
# **updatingSegmentCriteria**
> UpdatingSegmentCriteriaResponse updatingSegmentCriteria(format, mailingListID, apikey, segmentID, criteriaID, body)

Updating segment criteria

Updates an existing criterion in the specified segment.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.SegmentsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list the specified segment belongs.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var segmentID = "segmentID_example"; // String | The ID of the segment to update.

var criteriaID = 1.2; // Number | The ID of the criterion to process.

var body = new MoosendApi.UpdatingSegmentCriteriaRequest(); // UpdatingSegmentCriteriaRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatingSegmentCriteria(format, mailingListID, apikey, segmentID, criteriaID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list the specified segment belongs. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **segmentID** | **String**| The ID of the segment to update. | 
 **criteriaID** | **Number**| The ID of the criterion to process. | 
 **body** | [**UpdatingSegmentCriteriaRequest**](UpdatingSegmentCriteriaRequest.md)|  | 

### Return type

[**UpdatingSegmentCriteriaResponse**](UpdatingSegmentCriteriaResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

