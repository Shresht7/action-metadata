# Action Markdown
-----------------

<!-- slot: description -->
null
<!-- /slot -->

## Usage

```yaml
- name: action-markdown
  id: action-md
  uses: Shresht7/action-markdown@main
  with:
    path: ./action.yml # Path to the action metadata file (default: ./action.yaml)

- name: some-other-action
  uses: user/some-other-action@v1
  with:
    description: ${{ steps.action-md.outputs.description }}
    inputs: ${{ steps.action-md.outputs.inputs-md-table }}
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
|  `inputs-md-table` | Markdown table of the action inputs                         |
| `outputs-md-table` | Markdown table of the action outputs                        |
<!-- /slot -->