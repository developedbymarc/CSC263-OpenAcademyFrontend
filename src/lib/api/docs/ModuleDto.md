
# ModuleDto


## Properties

Name | Type
------------ | -------------
`id` | string
`courseId` | string
`title` | string
`description` | string
`order` | [CreateCourseRequestCategoryIdsInner](CreateCourseRequestCategoryIdsInner.md)
`status` | number

## Example

```typescript
import type { ModuleDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "courseId": null,
  "title": null,
  "description": null,
  "order": null,
  "status": null,
} satisfies ModuleDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModuleDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


