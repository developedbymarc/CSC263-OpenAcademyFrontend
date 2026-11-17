# RootApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**rootAdminsGet**](RootApi.md#rootadminsget) | **GET** /Root/admins |  |
| [**rootCreateAdminPost**](RootApi.md#rootcreateadminpost) | **POST** /Root/create-admin |  |
| [**rootDeleteAdminAdminIdDelete**](RootApi.md#rootdeleteadminadminiddelete) | **DELETE** /Root/delete-admin/{adminId} |  |



## rootAdminsGet

> ApiResponseOfIEnumerableOfGetAllAdminsDto rootAdminsGet()



### Example

```ts
import {
  Configuration,
  RootApi,
} from '';
import type { RootAdminsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RootApi();

  try {
    const data = await api.rootAdminsGet();
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

[**ApiResponseOfIEnumerableOfGetAllAdminsDto**](ApiResponseOfIEnumerableOfGetAllAdminsDto.md)

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


## rootCreateAdminPost

> ModelApiResponse rootCreateAdminPost(signUpDto)



### Example

```ts
import {
  Configuration,
  RootApi,
} from '';
import type { RootCreateAdminPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RootApi();

  const body = {
    // SignUpDto
    signUpDto: ...,
  } satisfies RootCreateAdminPostRequest;

  try {
    const data = await api.rootCreateAdminPost(body);
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


## rootDeleteAdminAdminIdDelete

> ModelApiResponse rootDeleteAdminAdminIdDelete(adminId)



### Example

```ts
import {
  Configuration,
  RootApi,
} from '';
import type { RootDeleteAdminAdminIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RootApi();

  const body = {
    // string
    adminId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RootDeleteAdminAdminIdDeleteRequest;

  try {
    const data = await api.rootDeleteAdminAdminIdDelete(body);
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
| **adminId** | `string` |  | [Defaults to `undefined`] |

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

