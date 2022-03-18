//  Library
import * as core from '@actions/core'
import { createInputsTable, createOutputsTable } from './library'
import { readActionYaml } from './helpers'

// =============
// GITHUB ACTION
// =============

export async function action() {

    //  Get Action Metadata
    const metadata = await readActionYaml()

    //  Generate inputs-md-table
    if (metadata.inputs) {
        const inputsMD = createInputsTable(metadata.inputs)
        core.setOutput('inputs-md-table', JSON.stringify(inputsMD))
    }

    //  Generate outputs-md-table
    if (metadata.outputs) {
        const outputsMD = createOutputsTable(metadata.outputs)
        core.setOutput('outputs-md-table', JSON.stringify(outputsMD))
    }

}

//  -----------------
export default action
//  -----------------