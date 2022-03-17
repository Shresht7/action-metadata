# Action Markdown
-----------------

GitHub Action to generate markdown-tables for `inputs` and `outputs` parameters specified in the `action.yaml` metadata file.

## Usage

```yaml
- name: action-markdown-table-generator
  id: md-table
  uses: Shresht7/action-markdown-table-generator@main
  with:
    path: ./action.yml # Path to the action metadata file (default: ./action.yaml)

- name: some-other-action
  uses: user/some-other-action@v1
  with:
    text: ${{ steps.md-table.outputs.inputs-md-table }}
```

## Inputs

<!-- slot: inputs -->
<!-- /slot -->

## Outputs

<!-- slot: outputs -->
<!-- /slot -->

## Permissions

