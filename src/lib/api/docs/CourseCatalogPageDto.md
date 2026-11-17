
# CourseCatalogPageDto


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;CourseCatalogItemDto&gt;](CourseCatalogItemDto.md)
`page` | [CourseCatalogPageDtoPage](CourseCatalogPageDtoPage.md)
`pageSize` | [CourseCatalogPageDtoPage](CourseCatalogPageDtoPage.md)
`totalCount` | [CourseCatalogPageDtoPage](CourseCatalogPageDtoPage.md)

## Example

```typescript
import type { CourseCatalogPageDto } from ''

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "page": null,
  "pageSize": null,
  "totalCount": null,
} satisfies CourseCatalogPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CourseCatalogPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


