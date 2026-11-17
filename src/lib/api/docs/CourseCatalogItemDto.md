
# CourseCatalogItemDto


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`description` | string
`thumbnailUrl` | string
`categories` | [Array&lt;CourseCategoryDto&gt;](CourseCategoryDto.md)

## Example

```typescript
import type { CourseCatalogItemDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "description": null,
  "thumbnailUrl": null,
  "categories": null,
} satisfies CourseCatalogItemDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CourseCatalogItemDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


