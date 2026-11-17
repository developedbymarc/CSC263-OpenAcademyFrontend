# LessonAssetsApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDelete**](LessonAssetsApi.md#coursescourseidmodulesmoduleidlessonslessonidassetsassetiddelete) | **DELETE** /Courses/{courseId}/Modules/{moduleId}/Lessons/{lessonId}/Assets/{assetId} |  |
| [**coursesCourseIdModulesModuleIdLessonsLessonIdAssetsGet**](LessonAssetsApi.md#coursescourseidmodulesmoduleidlessonslessonidassetsget) | **GET** /Courses/{courseId}/Modules/{moduleId}/Lessons/{lessonId}/Assets |  |
| [**coursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPost**](LessonAssetsApi.md#coursescourseidmodulesmoduleidlessonslessonidassetsimagespost) | **POST** /Courses/{courseId}/Modules/{moduleId}/Lessons/{lessonId}/Assets/images |  |
| [**coursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPost**](LessonAssetsApi.md#coursescourseidmodulesmoduleidlessonslessonidassetsvideospost) | **POST** /Courses/{courseId}/Modules/{moduleId}/Lessons/{lessonId}/Assets/videos |  |



## coursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDelete

> ApiResponseOfObject coursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDelete(courseId, moduleId, lessonId, assetId)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    assetId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDeleteRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsLessonIdAssetsAssetIdDelete(body);
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
| **assetId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ApiResponseOfObject**](ApiResponseOfObject.md)

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


## coursesCourseIdModulesModuleIdLessonsLessonIdAssetsGet

> ApiResponseOfIReadOnlyListOfLessonAssetDto coursesCourseIdModulesModuleIdLessonsLessonIdAssetsGet(courseId, moduleId, lessonId)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsGetRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsLessonIdAssetsGet(body);
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

[**ApiResponseOfIReadOnlyListOfLessonAssetDto**](ApiResponseOfIReadOnlyListOfLessonAssetDto.md)

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


## coursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPost

> ApiResponseOfLessonAssetDto coursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPost(courseId, moduleId, lessonId, file)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPostRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsLessonIdAssetsImagesPost(body);
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
| **file** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ApiResponseOfLessonAssetDto**](ApiResponseOfLessonAssetDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## coursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPost

> ApiResponseOfLessonAssetDto coursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPost(courseId, moduleId, lessonId, file)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    moduleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies CoursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPostRequest;

  try {
    const data = await api.coursesCourseIdModulesModuleIdLessonsLessonIdAssetsVideosPost(body);
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
| **file** | `Blob` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ApiResponseOfLessonAssetDto**](ApiResponseOfLessonAssetDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

