# LessonApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiModulesModuleIdLessonsPost**](LessonApi.md#apimodulesmoduleidlessonspost) | **POST** /api/modules/{moduleId}/lessons |  |



## apiModulesModuleIdLessonsPost

> ApiResponseOfLessonDto apiModulesModuleIdLessonsPost(moduleId, createLessonRequest)



### Example

```ts
import {
  Configuration,
  LessonApi,
} from '';
import type { ApiModulesModuleIdLessonsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonApi();

  const body = {
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateLessonRequest
    createLessonRequest: ...,
  } satisfies ApiModulesModuleIdLessonsPostRequest;

  try {
    const data = await api.apiModulesModuleIdLessonsPost(body);
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
| **moduleId** | `string` |  | [Defaults to `undefined`] |
| **createLessonRequest** | [CreateLessonRequest](CreateLessonRequest.md) |  | |

### Return type

[**ApiResponseOfLessonDto**](ApiResponseOfLessonDto.md)

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

