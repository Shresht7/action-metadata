# Action Metadata
-----------------

<!-- slot: description -->
GitHub Action to expose parameters specified in the `action.yaml` metadata file.
<!-- /slot -->

## Usage

```yaml
- name: action-metadata
  id: action-metadata
  uses: Shresht7/action-metadata@main
  with:
    path: ./action.yml # Path to the action metadata file (default: ./action.yaml)

- name: some-other-action
  uses: user/some-other-action@v1
  with:
    description: ${{ steps.action-metadata.outputs.description }}
    inputs: ${{ steps.action-metadata.outputs.inputs-md-table }}
```

## Inputs

<!-- slot: inputs -->
| Input | Description                      | Default/Required |
| :---: | :------------------------------- | ---------------: |
| `src` | Path to the action metadata file |     **required** |
<!-- /slot -->

## Outputs

<!-- slot: outputs -->
|       Output       | Description                                                 |
| :----------------: | :---------------------------------------------------------- |
|     `metadata`     | stringified JSON representation of the action metadata file |
| `inputs-md-table`  | Markdown table of the action inputs                         |
| `outputs-md-table` | Markdown table of the action outputs                        |
<!-- /slot -->