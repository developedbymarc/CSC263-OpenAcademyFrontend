
# SignUpDto


## Properties

Name | Type
------------ | -------------
`userName` | string
`firstName` | string
`lastName` | string
`email` | string
`password` | string
`confirmedPassword` | string
`role` | string

## Example

```typescript
import type { SignUpDto } from ''

// TODO: Update the object below with actual values
const example = {
  "userName": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "password": null,
  "confirmedPassword": null,
  "role": null,
} satisfies SignUpDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignUpDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


