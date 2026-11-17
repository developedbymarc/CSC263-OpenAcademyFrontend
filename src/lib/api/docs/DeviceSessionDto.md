
# DeviceSessionDto


## Properties

Name | Type
------------ | -------------
`refreshTokenId` | string
`refreshTokenFamilyId` | string
`createdAt` | Date
`expiresAt` | Date
`isPersistent` | boolean
`ip` | string
`userAgent` | string

## Example

```typescript
import type { DeviceSessionDto } from ''

// TODO: Update the object below with actual values
const example = {
  "refreshTokenId": null,
  "refreshTokenFamilyId": null,
  "createdAt": null,
  "expiresAt": null,
  "isPersistent": null,
  "ip": null,
  "userAgent": null,
} satisfies DeviceSessionDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeviceSessionDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


