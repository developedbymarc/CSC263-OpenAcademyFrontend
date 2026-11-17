
# LessonDto


## Properties

Name | Type
------------ | -------------
`id` | string
`moduleId` | string
`title` | string
`description` | string
`content` | string
`order` | [CourseCatalogPageDtoPage](CourseCatalogPageDtoPage.md)
`status` | number

## Example

```typescript
import type { LessonDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "moduleId": null,
  "title": null,
  "description": null,
  "content": null,
  "order": null,
  "status": null,
} satisfies LessonDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LessonDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


