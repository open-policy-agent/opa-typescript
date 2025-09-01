# ExecutePolicyWithInputRequestBody

The input document

## Example Usage

```typescript
import { ExecutePolicyWithInputRequestBody } from "@open-policy-agent/opa/sdk/models/operations";

let value: ExecutePolicyWithInputRequestBody = {
  input: false,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `input`                                                       | *components.Input*                                            | :heavy_check_mark:                                            | Arbitrary JSON used within your policies by accessing `input` |