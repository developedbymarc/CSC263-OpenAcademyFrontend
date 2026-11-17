
# CreateLessonRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`content` | string
`order` | [CourseCatalogPageDtoPage](CourseCatalogPageDtoPage.md)

## Example

```typescript
import type { CreateLessonRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "content": null,
  "order": null,
} satisfies CreateLessonRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateLessonRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


