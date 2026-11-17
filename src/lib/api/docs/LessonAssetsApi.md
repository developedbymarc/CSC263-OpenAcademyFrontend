# LessonAssetsApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiLessonsLessonIdAssetsAssetIdDelete**](LessonAssetsApi.md#apilessonslessonidassetsassetiddelete) | **DELETE** /api/lessons/{lessonId}/assets/{assetId} |  |
| [**apiLessonsLessonIdAssetsGet**](LessonAssetsApi.md#apilessonslessonidassetsget) | **GET** /api/lessons/{lessonId}/assets |  |
| [**apiLessonsLessonIdAssetsImagesPost**](LessonAssetsApi.md#apilessonslessonidassetsimagespost) | **POST** /api/lessons/{lessonId}/assets/images |  |
| [**apiLessonsLessonIdAssetsVideosPost**](LessonAssetsApi.md#apilessonslessonidassetsvideospost) | **POST** /api/lessons/{lessonId}/assets/videos |  |



## apiLessonsLessonIdAssetsAssetIdDelete

> ApiResponseOfObject apiLessonsLessonIdAssetsAssetIdDelete(lessonId, assetId)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { ApiLessonsLessonIdAssetsAssetIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    assetId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiLessonsLessonIdAssetsAssetIdDeleteRequest;

  try {
    const data = await api.apiLessonsLessonIdAssetsAssetIdDelete(body);
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


## apiLessonsLessonIdAssetsGet

> ApiResponseOfIReadOnlyListOfLessonAssetDto apiLessonsLessonIdAssetsGet(lessonId)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { ApiLessonsLessonIdAssetsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiLessonsLessonIdAssetsGetRequest;

  try {
    const data = await api.apiLessonsLessonIdAssetsGet(body);
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


## apiLessonsLessonIdAssetsImagesPost

> ApiResponseOfLessonAssetDto apiLessonsLessonIdAssetsImagesPost(lessonId, file)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { ApiLessonsLessonIdAssetsImagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies ApiLessonsLessonIdAssetsImagesPostRequest;

  try {
    const data = await api.apiLessonsLessonIdAssetsImagesPost(body);
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


## apiLessonsLessonIdAssetsVideosPost

> ApiResponseOfLessonAssetDto apiLessonsLessonIdAssetsVideosPost(lessonId, file)



### Example

```ts
import {
  Configuration,
  LessonAssetsApi,
} from '';
import type { ApiLessonsLessonIdAssetsVideosPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LessonAssetsApi();

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob (optional)
    file: BINARY_DATA_HERE,
  } satisfies ApiLessonsLessonIdAssetsVideosPostRequest;

  try {
    const data = await api.apiLessonsLessonIdAssetsVideosPost(body);
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

