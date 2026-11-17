# AdminApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminCreateModeratorPost**](AdminApi.md#admincreatemoderatorpost) | **POST** /Admin/create-moderator |  |
| [**adminDeleteModeratorModeratorIdDelete**](AdminApi.md#admindeletemoderatormoderatoriddelete) | **DELETE** /Admin/delete-moderator/{moderatorId} |  |
| [**adminModeratorsGet**](AdminApi.md#adminmoderatorsget) | **GET** /Admin/moderators |  |



## adminCreateModeratorPost

> ModelApiResponse adminCreateModeratorPost(signUpDto)



### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { AdminCreateModeratorPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AdminApi();

  const body = {
    // SignUpDto
    signUpDto: ...,
  } satisfies AdminCreateModeratorPostRequest;

  try {
    const data = await api.adminCreateModeratorPost(body);
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
| **signUpDto** | [SignUpDto](SignUpDto.md) |  | |

### Return type

[**ModelApiResponse**](ModelApiResponse.md)

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


## adminDeleteModeratorModeratorIdDelete

> ModelApiResponse adminDeleteModeratorModeratorIdDelete(moderatorId)



### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { AdminDeleteModeratorModeratorIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AdminApi();

  const body = {
    // string
    moderatorId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AdminDeleteModeratorModeratorIdDeleteRequest;

  try {
    const data = await api.adminDeleteModeratorModeratorIdDelete(body);
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
| **moderatorId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ModelApiResponse**](ModelApiResponse.md)

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


## adminModeratorsGet

> ApiResponseOfIEnumerableOfGetAllModeratorsDto adminModeratorsGet()



### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { AdminModeratorsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AdminApi();

  try {
    const data = await api.adminModeratorsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponseOfIEnumerableOfGetAllModeratorsDto**](ApiResponseOfIEnumerableOfGetAllModeratorsDto.md)

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

