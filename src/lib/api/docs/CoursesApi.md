# CoursesApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coursesCourseIdEnrollmentsPost**](CoursesApi.md#coursescourseidenrollmentspost) | **POST** /Courses/{courseId}/enrollments |  |
| [**coursesGet**](CoursesApi.md#coursesget) | **GET** /Courses |  |
| [**coursesPost**](CoursesApi.md#coursespost) | **POST** /Courses |  |



## coursesCourseIdEnrollmentsPost

> ApiResponseOfEnrollmentDto coursesCourseIdEnrollmentsPost(courseId)



### Example

```ts
import {
  Configuration,
  CoursesApi,
} from '';
import type { CoursesCourseIdEnrollmentsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CoursesApi();

  const body = {
    // string
    courseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CoursesCourseIdEnrollmentsPostRequest;

  try {
    const data = await api.coursesCourseIdEnrollmentsPost(body);
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

### Return type

[**ApiResponseOfEnrollmentDto**](ApiResponseOfEnrollmentDto.md)

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


## coursesGet

> ApiResponseOfCourseCatalogPageDto coursesGet(title, category, page, pageSize)



### Example

```ts
import {
  Configuration,
  CoursesApi,
} from '';
import type { CoursesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CoursesApi();

  const body = {
    // string (optional)
    title: title_example,
    // string (optional)
    category: category_example,
    // CoursesGetPageParameter (optional)
    page: 56,
    // CoursesGetPageSizeParameter (optional)
    pageSize: 56,
  } satisfies CoursesGetRequest;

  try {
    const data = await api.coursesGet(body);
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
| **title** | `string` |  | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **page** | [](.md) |  | [Optional] [Defaults to `1`] |
| **pageSize** | [](.md) |  | [Optional] [Defaults to `20`] |

### Return type

[**ApiResponseOfCourseCatalogPageDto**](ApiResponseOfCourseCatalogPageDto.md)

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


## coursesPost

> ApiResponseOfCourseDto coursesPost(createCourseRequest)



### Example

```ts
import {
  Configuration,
  CoursesApi,
} from '';
import type { CoursesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CoursesApi();

  const body = {
    // CreateCourseRequest
    createCourseRequest: ...,
  } satisfies CoursesPostRequest;

  try {
    const data = await api.coursesPost(body);
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
| **createCourseRequest** | [CreateCourseRequest](CreateCourseRequest.md) |  | |

### Return type

[**ApiResponseOfCourseDto**](ApiResponseOfCourseDto.md)

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

