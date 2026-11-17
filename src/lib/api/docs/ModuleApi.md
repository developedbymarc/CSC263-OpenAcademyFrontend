# ModuleApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiCoursesCourseIdModulesPost**](ModuleApi.md#apicoursescourseidmodulespost) | **POST** /api/courses/{courseId}/modules |  |



## apiCoursesCourseIdModulesPost

> ApiResponseOfModuleDto apiCoursesCourseIdModulesPost(courseId, createModuleRequest)



### Example

```ts
import {
  Configuration,
  ModuleApi,
} from '';
import type { ApiCoursesCourseIdModulesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModuleApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateModuleRequest
    createModuleRequest: ...,
  } satisfies ApiCoursesCourseIdModulesPostRequest;

  try {
    const data = await api.apiCoursesCourseIdModulesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseId** | `string` |  | [Defaults to `undefined`] |
| **createModuleRequest** | [CreateModuleRequest](CreateModuleRequest.md) |  | |

### Return type

[**ApiResponseOfModuleDto**](ApiResponseOfModuleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

