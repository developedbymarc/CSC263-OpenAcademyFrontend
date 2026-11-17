
# ApiResponseOfCourseCatalogPageDto


## Properties

Name | Type
------------ | -------------
`success` | boolean
`data` | [CourseCatalogPageDto](CourseCatalogPageDto.md)
`error` | [ApiError](ApiError.md)

## Example

```typescript
import type { ApiResponseOfCourseCatalogPageDto } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "data": null,
  "error": null,
} satisfies ApiResponseOfCourseCatalogPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiResponseOfCourseCatalogPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


