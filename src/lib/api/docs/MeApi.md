# MeApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**meAvatarPut**](MeApi.md#meavatarput) | **PUT** /Me/avatar |  |
| [**meInfoGet**](MeApi.md#meinfoget) | **GET** /Me/info |  |
| [**meInfoPut**](MeApi.md#meinfoput) | **PUT** /Me/info |  |



## meAvatarPut

> ModelApiResponse meAvatarPut(contentType, contentDisposition, headers, length, name, fileName)



### Example

```ts
import {
  Configuration,
  MeApi,
} from '';
import type { MeAvatarPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MeApi();

  const body = {
    // string (optional)
    contentType: contentType_example,
    // string (optional)
    contentDisposition: contentDisposition_example,
    // { [key: string]: Array<string>; } (optional)
    headers: Object,
    // MeAvatarPutRequestLength (optional)
    length: ...,
    // string (optional)
    name: name_example,
    // string (optional)
    fileName: fileName_example,
  } satisfies MeAvatarPutRequest;

  try {
    const data = await api.meAvatarPut(body);
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
| **contentType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **contentDisposition** | `string` |  | [Optional] [Defaults to `undefined`] |
| **headers** | `{ [key: string]: Array<string>; }` |  | [Optional] |
| **length** | [MeAvatarPutRequestLength](MeAvatarPutRequestLength.md) |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **fileName** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ModelApiResponse**](ModelApiResponse.md)

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


## meInfoGet

> GetMyInfoDto meInfoGet()



### Example

```ts
import {
  Configuration,
  MeApi,
} from '';
import type { MeInfoGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MeApi();

  try {
    const data = await api.meInfoGet();
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

[**GetMyInfoDto**](GetMyInfoDto.md)

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


## meInfoPut

> ModelApiResponse meInfoPut(updateMyInfoDto)



### Example

```ts
import {
  Configuration,
  MeApi,
} from '';
import type { MeInfoPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MeApi();

  const body = {
    // UpdateMyInfoDto
    updateMyInfoDto: ...,
  } satisfies MeInfoPutRequest;

  try {
    const data = await api.meInfoPut(body);
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
| **updateMyInfoDto** | [UpdateMyInfoDto](UpdateMyInfoDto.md) |  | |

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

