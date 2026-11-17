
# ApiResponseOfWhoAmIDto


## Properties

Name | Type
------------ | -------------
`success` | boolean
`data` | [WhoAmIDto](WhoAmIDto.md)
`error` | [ApiError](ApiError.md)

## Example

```typescript
import type { ApiResponseOfWhoAmIDto } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "data": null,
  "error": null,
} satisfies ApiResponseOfWhoAmIDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiResponseOfWhoAmIDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


