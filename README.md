<h1 align='center'>
  Action Metadata
</h1>

<p align='center'>
<!-- slot: description  -->
A GitHub Action to expose action metadata of a GitHub Action!
<!-- /slot -->
</p>

---

## 📖 Usage

Use this action as a step in a workflow job and give it an `id` (`action-metadata` in the following examples).

```yaml
- name: action-metadata               # Name of the workflow step
  id: action-metadata                 # Give this step an id to reference it later for outputs
  uses: Shresht7/action-metadata@v1   # Use this action
```

The action will expose the [metadata][1] as an `output` which you can reference in subsequent steps using an [expression][2] `${{ steps.<given_id>.outputs.<output> }}`.
For a list of all available outputs see [Outputs](#outputs).


```yaml
- name: some-other-action           
  uses: user/some-other-action@v1     # Not a real user and/or action
  with:
    description: ${{ steps.action-metadata.outputs.description }}
    inputs: ${{ steps.action-metadata.outputs.inputs-md-table }}
```

The entire [metadata][1] object is available as a stringified JSON (i.e. `string`) as the `metadata` output. You will need to parse this string to use it as an object using [`fromJSON`][3] in an [expression][2] or `JSON.parse` in your action.

```yaml
- name: some-other-action
  uses: user/some-other-action@v1     # Not a real user and/or action
  with:
    # Use the fromJSON function in the expression to parse metadata as JSON
    name: ${{ fromJSON(steps.action-metadata.outputs.metadata).author }}
```

## 📋 Inputs

The action can run on auto-pilot using the default parameters. To change any inputs, pass them along the workflow step.

```yaml
- name: action-metadata
  id: action-metadata
  uses: Shresht7/action-metadata@v1
  with:
    input-table-alignment: 'c,l,r,l'
```

<!-- slot: inputs  -->
| Input                    | Description                                                                                           |   Default | Required |
| :----------------------- | :---------------------------------------------------------------------------------------------------- | --------: | :------: |
| `input-table-alignment`  | Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] | `l,l,r,c` |          |
| `output-table-alignment` | Comma-separated array denoting the alignment of columns ['l' for left, 'c' for center, 'r' for right] | `l,l,r,c` |          |
<!-- /slot -->

## 📋 Outputs

The action exposes the entire metadata yaml (`metadata`) as a stringified JSON. To make the most of this output you will need to parse it using [`fromJSON`][3] or `JSON.parse` functions.

The `name`, `author` and `description` fields, in addition to being available through the parsed `metadata`, are also exposed on their own.

This action also exposes markdown-tables for the `input` and `output` parameters specified in the metadata file. This was the primary motivation for this action.

<!-- slot: outputs  -->
| Output             | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| `metadata`         | stringified JSON representation of the entire action metadata file |
| `name`             | Name of the GitHub Action                                          |
| `author`           | Name of the action's author                                        |
| `description`      | A short description of the action                                  |
| `inputs-md-table`  | Markdown table of the action inputs                                |
| `outputs-md-table` | Markdown table of the action outputs                               |
<!-- /slot -->

## 📃 Workflow Example

The [Inputs](#inputs) and [Outputs](#outputs) tables you see in this readme were generated using this action in conjunction with [markdown-slots][4]. To see the complete workflow, see [action-readme.yml][5].

<details>

<summary>or click here</summary>

<br />

<!-- slot: action-readme-workflow | prepend: ```yaml, append: ```  -->
```yaml
# =============
# ACTION README
# =============

name: Action Readme

# Activation Events
# =================

on:
  # When the action.yml or this workflow file changes on the main branch
  push:
    branches:
      - main
    paths:
      - action.yml
      - .github/workflows/action-readme.yml

  # Manual workflow dispatch
  workflow_dispatch:

# Jobs
# ====

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      # Checkout Repository ✅
      # ======================

      - name: checkout
        uses: actions/checkout@v3

      # Retrieve Action Metadata 📜
      # ===========================

      - name: get action metadata
        id: action-metadata
        uses: Shresht7/action-metadata@v1

      # Read this Workflow File 📄
      # ==========================

      - name: read workflow file
        id: read-file
        uses: Shresht7/read-file-action@v1
        with:
          path: .github/workflows/action-readme.yml

      # Markdown Slots 📋
      # =================

      - name: update readme slots
        id: markdown-slots
        uses: Shresht7/markdown-slots@v1
        with:
          slots: |
            - slot: description
              content: ${{ steps.action-metadata.outputs.description }}
            - slot: inputs
              content: ${{ steps.action-metadata.outputs.inputs-md-table }}
            - slot: outputs
              content: ${{ steps.action-metadata.outputs.outputs-md-table }}
            - slot: action-readme-workflow
              content: ${{ toJSON(steps.read-file.outputs.contents) }}
              props:
                prefix: "```yaml"
                suffix: "```"

      # Push Changes 🌎
      # ===============

      - name: check for changes
        id: git-diff
        run: |
          if git diff --exit-code; then
            echo "::set-output name=changes_exist::false"
          else
            echo "::set-output name=changes_exist::true"
          fi

      - name: commit and push
        if: ${{ steps.git-diff.outputs.changes_exist == 'true' }}
        run: |
          git config user.name 'github-actions[bot]'
          git config user.email 'github-actions[bot]@users.noreply.github.com'
          git add .
          git commit -m 'Update README.md 📄'
          git push

```
<!-- /slot -->

</details>

---

## 📑 License
> [MIT License](./LICENSE)

<!-- LINKS -->
[1]: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
[2]: https://docs.github.com/en/actions/learn-github-actions/expressions
[3]: https://docs.github.com/en/actions/learn-github-actions/expressions#fromjson
[4]: https://www.github.com/Shresht7/markdown-slots
[5]: .github/workflows/action-readme.yml