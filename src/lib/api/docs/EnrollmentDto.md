
# EnrollmentDto


## Properties

Name | Type
------------ | -------------
`courseId` | string
`studentId` | string
`enrollmentDate` | Date
`status` | number

## Example

```typescript
import type { EnrollmentDto } from ''

// TODO: Update the object below with actual values
const example = {
  "courseId": null,
  "studentId": null,
  "enrollmentDate": null,
  "status": null,
} satisfies EnrollmentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrollmentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


