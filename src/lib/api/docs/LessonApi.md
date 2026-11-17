# LessonApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coursesCourseIdModulesModuleIdLessonsGet**](LessonApi.md#coursescourseidmodulesmoduleidlessonsget) | **GET** /Courses/{courseId}/Modules/{moduleId}/Lessons |  |
| [**coursesCourseIdModulesModuleIdLessonsLessonIdGet**](LessonApi.md#coursescourseidmodulesmoduleidlessonslessonidget) | **GET** /Courses/{courseId}/Modules/{moduleId}/Lessons/{lessonId} |  |
| [**coursesCourseIdModulesModuleIdLessonsPost**](LessonApi.md#coursescourseidmodulesmoduleidlessonspost) | **POST** /Courses/{courseId}/Modules/{moduleId}/Lessons |  |



## coursesCourseIdModulesModuleIdLessonsGet

> ApiResponseOfIReadOnlyListOfLessonDto coursesCourseIdModulesModuleIdLessonsGet(courseId, moduleId)



### Example

```ts
import {
  Configuration,
  LessonApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CoursesCourseIdModulesModuleIdLessonsGetRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsGet(body);
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
| **moduleId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ApiResponseOfIReadOnlyListOfLessonDto**](ApiResponseOfIReadOnlyListOfLessonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## coursesCourseIdModulesModuleIdLessonsLessonIdGet

> ApiResponseOfLessonDto coursesCourseIdModulesModuleIdLessonsLessonIdGet(courseId, moduleId, lessonId)



### Example

```ts
import {
  Configuration,
  LessonApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsLessonIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CoursesCourseIdModulesModuleIdLessonsLessonIdGetRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsLessonIdGet(body);
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
| **moduleId** | `string` |  | [Defaults to `undefined`] |
| **lessonId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ApiResponseOfLessonDto**](ApiResponseOfLessonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## coursesCourseIdModulesModuleIdLessonsPost

> ApiResponseOfLessonDto coursesCourseIdModulesModuleIdLessonsPost(courseId, moduleId, createLessonRequest)



### Example

```ts
import {
  Configuration,
  LessonApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateLessonRequest
    createLessonRequest: ...,
  } satisfies CoursesCourseIdModulesModuleIdLessonsPostRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsPost(body);
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

