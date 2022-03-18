# Action Markdown
-----------------

<!-- slot: description -->
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
| Input | Description                      |       Default | Required |
| :---: | :------------------------------- | ------------: | :------: |
|  src  | Path to the action metadata file | ./action.yaml |  `true`  |
<!-- /slot -->

## Outputs

<!-- slot: outputs -->
|      Output      | Description                          |
| :--------------: | :----------------------------------- |
| inputs-md-table  | Markdown table of the action inputs  |
| outputs-md-table | Markdown table of the action outputs |
<!-- /slot -->