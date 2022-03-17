//  Library
import * as core from '@actions/core'
import { createMarkdownTable, readActionYaml } from './helpers'

// =============
// GITHUB ACTION
// =============

export async function action() {

    //  Get Action Metadata
    const metadata = await readActionYaml()

    //  Generate inputs-md-table
    if (metadata.inputs) {
        const inputs = []
        for (const [key, value] of Object.entries(metadata.inputs)) {
            inputs.push([
                key,
                value.description,
                value.required ? '**required**' : `\`${value.default?.toString()}\`` || ''
            ])
            const inputsMD = createMarkdownTable(inputs, ['input', 'description', 'default'])
            core.setOutput('inputs-md-table', inputsMD)
        }
    }

    //  Generate outputs-md-table
    if (metadata.outputs) {
        const outputs = []
        for (const [key, value] of Object.entries(metadata.outputs)) {
            outputs.push([
                key,
                value.description
            ])
        }
        const outputsMD = createMarkdownTable(outputs, ['outputs', 'description'])
        core.setOutput('outputs-md-table', outputsMD)
    }

}

//  -----------------
export default action
//  -----------------