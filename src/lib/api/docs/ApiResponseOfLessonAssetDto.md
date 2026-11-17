
# ApiResponseOfLessonAssetDto


## Properties

Name | Type
------------ | -------------
`success` | boolean
`data` | [LessonAssetDto](LessonAssetDto.md)
`error` | [ApiError](ApiError.md)

## Example

```typescript
import type { ApiResponseOfLessonAssetDto } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "data": null,
  "error": null,
} satisfies ApiResponseOfLessonAssetDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiResponseOfLessonAssetDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


