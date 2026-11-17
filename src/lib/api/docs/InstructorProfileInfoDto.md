
# InstructorProfileInfoDto


## Properties

Name | Type
------------ | -------------
`headline` | string
`bio` | string
`expertise` | string

## Example

```typescript
import type { InstructorProfileInfoDto } from ''

// TODO: Update the object below with actual values
const example = {
  "headline": null,
  "bio": null,
  "expertise": null,
} satisfies InstructorProfileInfoDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstructorProfileInfoDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


