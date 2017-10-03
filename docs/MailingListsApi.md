# MoosendApi.MailingListsApi

All URIs are relative to *https://api.moosend.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**creatingACustomField**](MailingListsApi.md#creatingACustomField) | **POST** /lists/{MailingListID}/customfields/create.{Format} | Creating a custom field
[**creatingAMailingList**](MailingListsApi.md#creatingAMailingList) | **POST** /lists/create.{Format} | Creating a mailing list
[**deletingAMailingList**](MailingListsApi.md#deletingAMailingList) | **DELETE** /lists/{MailingListID}/delete.{Format} | Deleting a mailing list
[**gettingAllActiveMailingLists**](MailingListsApi.md#gettingAllActiveMailingLists) | **GET** /lists.{Format} | Getting all active mailing lists
[**gettingAllActiveMailingListsWithPaging**](MailingListsApi.md#gettingAllActiveMailingListsWithPaging) | **GET** /lists/{Page}/{PageSize}.{Format} | Getting all active mailing lists with paging
[**gettingMailingListDetails**](MailingListsApi.md#gettingMailingListDetails) | **GET** /lists/{MailingListID}/details.{Format} | Getting mailing list details
[**removingACustomField**](MailingListsApi.md#removingACustomField) | **DELETE** /lists/{MailingListID}/customfields/{CustomFieldID}/delete.{Format} | Removing a custom field
[**updatingACustomField**](MailingListsApi.md#updatingACustomField) | **POST** /lists/{MailingListID}/customfields/{CustomFieldID}/update.{Format} | Updating a custom field
[**updatingAMailingList**](MailingListsApi.md#updatingAMailingList) | **POST** /lists/{MailingListID}/update.{Format} | Updating a mailing list


<a name="creatingACustomField"></a>
# **creatingACustomField**
> CreatingACustomFieldResponse creatingACustomField(format, apikey, mailingListID, body)

Creating a custom field

Creates a new custom field in the specified mailing list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list where the custom field will belong.

var body = new MoosendApi.CreatingACustomFieldRequest(); // CreatingACustomFieldRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatingACustomField(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list where the custom field will belong. | 
 **body** | [**CreatingACustomFieldRequest**](CreatingACustomFieldRequest.md)|  | 

### Return type

[**CreatingACustomFieldResponse**](CreatingACustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="creatingAMailingList"></a>
# **creatingAMailingList**
> CreatingAMailingListResponse creatingAMailingList(format, apikey, body)

Creating a mailing list

Creates a new empty mailing list in your account.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var body = new MoosendApi.CreatingAMailingListRequest(); // CreatingAMailingListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.creatingAMailingList(format, apikey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **body** | [**CreatingAMailingListRequest**](CreatingAMailingListRequest.md)|  | 

### Return type

[**CreatingAMailingListResponse**](CreatingAMailingListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletingAMailingList"></a>
# **deletingAMailingList**
> DeletingAMailingListResponse deletingAMailingList(format, apikey, mailingListID)

Deleting a mailing list

Deletes a mailing list from your account.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletingAMailingList(format, apikey, mailingListID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to be deleted. | 

### Return type

[**DeletingAMailingListResponse**](DeletingAMailingListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingAllActiveMailingLists"></a>
# **gettingAllActiveMailingLists**
> GettingAllActiveMailingListsResponse gettingAllActiveMailingLists(format, apikey, opts)

Getting all active mailing lists

Gets a list of your active mailing lists in your account.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var opts = { 
  'withStatistics': "withStatistics_example", // String | Specifies whether to fetch statistics for the subscribers or not. If omitted, results will be returned with statistics by default.
  'shortBy': "shortBy_example", // String | The name of the campaign property to sort results by. If not specified, results will be sorted by the CreatedOn property
  'sortMethod': "sortMethod_example" // String | The method to sort results: ASC for ascending, DESC for descending. If not specified, `ASC` will be assumed
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingAllActiveMailingLists(format, apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **withStatistics** | **String**| Specifies whether to fetch statistics for the subscribers or not. If omitted, results will be returned with statistics by default. | [optional] 
 **shortBy** | **String**| The name of the campaign property to sort results by. If not specified, results will be sorted by the CreatedOn property | [optional] 
 **sortMethod** | **String**| The method to sort results: ASC for ascending, DESC for descending. If not specified, &#x60;ASC&#x60; will be assumed | [optional] 

### Return type

[**GettingAllActiveMailingListsResponse**](GettingAllActiveMailingListsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingAllActiveMailingListsWithPaging"></a>
# **gettingAllActiveMailingListsWithPaging**
> GettingAllActiveMailingListsWithPagingResponse gettingAllActiveMailingListsWithPaging(format, apikey, page, pageSize, opts)

Getting all active mailing lists with paging

Gets a list of your active mailing lists in your account. Because the results for this call could be quite big, paging information is required as input.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var page = 1.2; // Number | The page that you want to get.

var pageSize = 1.2; // Number | Lists Per Page.

var opts = { 
  'shortBy': "shortBy_example", // String | The name of the campaign property to sort results by. If not specified, results will be sorted by the CreatedOn property
  'sortMethod': "sortMethod_example" // String | The method to sort results: ASC for ascending, DESC for descending. If not specified, `ASC` will be assumed
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingAllActiveMailingListsWithPaging(format, apikey, page, pageSize, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **page** | **Number**| The page that you want to get. | 
 **pageSize** | **Number**| Lists Per Page. | 
 **shortBy** | **String**| The name of the campaign property to sort results by. If not specified, results will be sorted by the CreatedOn property | [optional] 
 **sortMethod** | **String**| The method to sort results: ASC for ascending, DESC for descending. If not specified, &#x60;ASC&#x60; will be assumed | [optional] 

### Return type

[**GettingAllActiveMailingListsWithPagingResponse**](GettingAllActiveMailingListsWithPagingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gettingMailingListDetails"></a>
# **gettingMailingListDetails**
> GettingMailingListDetailsResponse gettingMailingListDetails(format, mailingListID, apikey, opts)

Getting mailing list details

Gets details for a given mailing list. You may include subscriber statistics in your results or not. Any segments existing for the requested mailing list will not be included in the results.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to be returned.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var opts = { 
  'withStatistics': "withStatistics_example" // String | Specifies whether to fetch statistics for the subscribers or not. If omitted, results will be returned with statistics by default.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettingMailingListDetails(format, mailingListID, apikey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **mailingListID** | **String**| The ID of the mailing list to be returned. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **withStatistics** | **String**| Specifies whether to fetch statistics for the subscribers or not. If omitted, results will be returned with statistics by default. | [optional] 

### Return type

[**GettingMailingListDetailsResponse**](GettingMailingListDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removingACustomField"></a>
# **removingACustomField**
> RemovingACustomFieldResponse removingACustomField(format, customFieldID, apikey, mailingListID)

Removing a custom field

Removes a custom field definition from the specified mailing list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var customFieldID = "customFieldID_example"; // String | The ID of the custom field to be deleted.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list where the custom field belongs.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removingACustomField(format, customFieldID, apikey, mailingListID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **customFieldID** | **String**| The ID of the custom field to be deleted. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list where the custom field belongs. | 

### Return type

[**RemovingACustomFieldResponse**](RemovingACustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatingACustomField"></a>
# **updatingACustomField**
> UpdatingACustomFieldResponse updatingACustomField(format, customFieldID, apikey, mailingListID, body)

Updating a custom field

Updates the properties of an existing custom field in the specified mailing list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var customFieldID = "customFieldID_example"; // String | The ID of the custom field to be updated.

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list where the custom field belongs.

var body = new MoosendApi.UpdatingACustomFieldRequest(); // UpdatingACustomFieldRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatingACustomField(format, customFieldID, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **customFieldID** | **String**| The ID of the custom field to be updated. | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list where the custom field belongs. | 
 **body** | [**UpdatingACustomFieldRequest**](UpdatingACustomFieldRequest.md)|  | 

### Return type

[**UpdatingACustomFieldResponse**](UpdatingACustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatingAMailingList"></a>
# **updatingAMailingList**
> UpdatingAMailingListResponse updatingAMailingList(format, apikey, mailingListID, body)

Updating a mailing list

Updates the properties of an existing mailing list.

### Example
```javascript
var MoosendApi = require('moosend_api');

var apiInstance = new MoosendApi.MailingListsApi();

var format = "format_example"; // String | 

var apikey = "apikey_example"; // String | You may find your API Key or generate a new one in your account settings.

var mailingListID = "mailingListID_example"; // String | The ID of the mailing list to be updated.

var body = new MoosendApi.UpdatingAMailingListRequest(); // UpdatingAMailingListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatingAMailingList(format, apikey, mailingListID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  | 
 **apikey** | **String**| You may find your API Key or generate a new one in your account settings. | 
 **mailingListID** | **String**| The ID of the mailing list to be updated. | 
 **body** | [**UpdatingAMailingListRequest**](UpdatingAMailingListRequest.md)|  | 

### Return type

[**UpdatingAMailingListResponse**](UpdatingAMailingListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

