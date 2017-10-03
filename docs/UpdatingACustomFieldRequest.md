# MoosendApi.UpdatingACustomFieldRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the custom field. | 
**customFieldType** | **String** | Specifies the data type of the custom field. This must be one of the following values. If omitted, Text will be assumed. * &#x60;Text&#x60; * &#x60;Decimal&#x60; * &#x60;DateTime&#x60; * &#x60;SingleSelectDropdown&#x60; * &#x60;Integer&#x60; * &#x60;CheckBox&#x60; | [optional] 
**options** | **String** | If you want to create a custom field of type SingleSelectDropdown, you must set this parameter to specify the available options for the user to choose from. Use a comma (,) to separate different options. | [optional] 
**isRequired** | **String** | Specify whether this is field will be mandatory on not, when being used in a subscription form. You should specify a value of either true or false. If omitted, false will be assumed. | [optional] 


