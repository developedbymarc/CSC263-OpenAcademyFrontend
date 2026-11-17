# AuthApi

All URIs are relative to *https://localhost:7034*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authConfirmEmailGet**](AuthApi.md#authconfirmemailget) | **GET** /Auth/confirm-email |  |
| [**authCsrfGet**](AuthApi.md#authcsrfget) | **GET** /Auth/csrf |  |
| [**authDevicesSignedInPost**](AuthApi.md#authdevicessignedinpost) | **POST** /Auth/devices-signed-in |  |
| [**authRefreshPost**](AuthApi.md#authrefreshpost) | **POST** /Auth/refresh |  |
| [**authResendEmailConfirmationPost**](AuthApi.md#authresendemailconfirmationpost) | **POST** /Auth/resend-email-confirmation |  |
| [**authResetPasswordIntentPost**](AuthApi.md#authresetpasswordintentpost) | **POST** /Auth/reset-password-intent |  |
| [**authResetPasswordPost**](AuthApi.md#authresetpasswordpost) | **POST** /Auth/reset-password |  |
| [**authSigninPost**](AuthApi.md#authsigninpost) | **POST** /Auth/signin |  |
| [**authSignoutAllDevicesPost**](AuthApi.md#authsignoutalldevicespost) | **POST** /Auth/signout-all-devices |  |
| [**authSignoutDevicePost**](AuthApi.md#authsignoutdevicepost) | **POST** /Auth/signout-device |  |
| [**authSignoutPost**](AuthApi.md#authsignoutpost) | **POST** /Auth/signout |  |
| [**authSignupPost**](AuthApi.md#authsignuppost) | **POST** /Auth/signup |  |
| [**authWhoamiGet**](AuthApi.md#authwhoamiget) | **GET** /Auth/whoami |  |



## authConfirmEmailGet

> ModelApiResponse authConfirmEmailGet(userId, token)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthConfirmEmailGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string (optional)
    userId: userId_example,
    // string (optional)
    token: token_example,
  } satisfies AuthConfirmEmailGetRequest;

  try {
    const data = await api.authConfirmEmailGet(body);
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
| **userId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **token** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## authCsrfGet

> ApiResponseOfCsrfTokenDto authCsrfGet()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthCsrfGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authCsrfGet();
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

[**ApiResponseOfCsrfTokenDto**](ApiResponseOfCsrfTokenDto.md)

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


## authDevicesSignedInPost

> ApiResponseOfIEnumerableOfDeviceSessionDto authDevicesSignedInPost()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthDevicesSignedInPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authDevicesSignedInPost();
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

[**ApiResponseOfIEnumerableOfDeviceSessionDto**](ApiResponseOfIEnumerableOfDeviceSessionDto.md)

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


## authRefreshPost

> ModelApiResponse authRefreshPost()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRefreshPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authRefreshPost();
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


## authResendEmailConfirmationPost

> ModelApiResponse authResendEmailConfirmationPost(resendEmailConfirmationDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthResendEmailConfirmationPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResendEmailConfirmationDto
    resendEmailConfirmationDto: ...,
  } satisfies AuthResendEmailConfirmationPostRequest;

  try {
    const data = await api.authResendEmailConfirmationPost(body);
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
| **resendEmailConfirmationDto** | [ResendEmailConfirmationDto](ResendEmailConfirmationDto.md) |  | |

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


## authResetPasswordIntentPost

> ModelApiResponse authResetPasswordIntentPost(resetPasswordIntentDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthResetPasswordIntentPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResetPasswordIntentDto
    resetPasswordIntentDto: ...,
  } satisfies AuthResetPasswordIntentPostRequest;

  try {
    const data = await api.authResetPasswordIntentPost(body);
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
| **resetPasswordIntentDto** | [ResetPasswordIntentDto](ResetPasswordIntentDto.md) |  | |

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


## authResetPasswordPost

> ModelApiResponse authResetPasswordPost(resetPasswordDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthResetPasswordPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResetPasswordDto
    resetPasswordDto: ...,
  } satisfies AuthResetPasswordPostRequest;

  try {
    const data = await api.authResetPasswordPost(body);
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
| **resetPasswordDto** | [ResetPasswordDto](ResetPasswordDto.md) |  | |

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


## authSigninPost

> ModelApiResponse authSigninPost(signInDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSigninPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignInDto
    signInDto: ...,
  } satisfies AuthSigninPostRequest;

  try {
    const data = await api.authSigninPost(body);
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
| **signInDto** | [SignInDto](SignInDto.md) |  | |

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


## authSignoutAllDevicesPost

> ModelApiResponse authSignoutAllDevicesPost()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignoutAllDevicesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authSignoutAllDevicesPost();
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


## authSignoutDevicePost

> ModelApiResponse authSignoutDevicePost(signOutDeviceDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignoutDevicePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignOutDeviceDto
    signOutDeviceDto: ...,
  } satisfies AuthSignoutDevicePostRequest;

  try {
    const data = await api.authSignoutDevicePost(body);
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
| **signOutDeviceDto** | [SignOutDeviceDto](SignOutDeviceDto.md) |  | |

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


## authSignoutPost

> ModelApiResponse authSignoutPost()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authSignoutPost();
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


## authSignupPost

> ModelApiResponse authSignupPost(signUpDto)



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignupPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignUpDto
    signUpDto: ...,
  } satisfies AuthSignupPostRequest;

  try {
    const data = await api.authSignupPost(body);
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


## authWhoamiGet

> ApiResponseOfWhoAmIDto authWhoamiGet()



### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthWhoamiGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authWhoamiGet();
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

[**ApiResponseOfWhoAmIDto**](ApiResponseOfWhoAmIDto.md)

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

