
# LessonAssetDto


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | number
`contentType` | string
`sizeBytes` | [MeAvatarPutRequestLength](MeAvatarPutRequestLength.md)
`durationSeconds` | [LessonAssetDtoDurationSeconds](LessonAssetDtoDurationSeconds.md)
`order` | [CreateCourseRequestCategoryIdsInner](CreateCourseRequestCategoryIdsInner.md)
`url` | string
`urlExpiresAt` | Date

## Example

```typescript
import type { LessonAssetDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "contentType": null,
  "sizeBytes": null,
  "durationSeconds": null,
  "order": null,
  "url": null,
  "urlExpiresAt": null,
} satisfies LessonAssetDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LessonAssetDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


