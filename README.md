# Action Metadata
-----------------

<!-- slot: description -->
A GitHub Action to expose action metadata of a GitHub Action!
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
| Input                    | Description                                                                                           |         Default |   Required   |
| :----------------------- | :---------------------------------------------------------------------------------------------------- | --------------: | :----------: |
| `src`                    | Path to the action metadata file                                                                      | `./action.yaml` | **required** |
| `input-table-alignment`  | Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] |       `l,l,r,c` |              |
| `output-table-alignment` | Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] |       `l,l,r,c` |              |
<!-- /slot -->

## Outputs

<!-- slot: outputs -->
| Output             | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| `metadata`         | stringified JSON representation of the entire action metadata file |
| `name`             | Name of the GitHub Action                                          |
| `author`           | Name of the action's author                                        |
| `description`      | A short description of the action                                  |
| `inputs-md-table`  | Markdown table of the action inputs                                |
| `outputs-md-table` | Markdown table of the action outputs                               |
<!-- /slot -->