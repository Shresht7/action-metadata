//  Library
import * as core from '@actions/core'
import { createInputsTable, createOutputsTable } from './library'
import { inputAlignment, outputAlignment } from './config'

//  Helpers
import { readActionYaml } from './helpers'
import { outputs } from './metadata'

// =============
// GITHUB ACTION
// =============

export async function action() {

    //  Get Action Metadata
    const metadata = await readActionYaml()

    //  Export the metadata object
    core.setOutput(outputs.metadata, metadata)

    //  Export name, author and description
    core.setOutput(outputs.name, metadata.name)
    core.setOutput(outputs.author, metadata.author)
    core.setOutput(outputs.description, metadata.description)

    //  Export inputs-md-table
    if (metadata.inputs) {
        const inputsMD = createInputsTable(metadata.inputs, inputAlignment)
        core.setOutput(outputs.inputsMdTable, JSON.stringify(inputsMD))
    }

    //  Export outputs-md-table
    if (metadata.outputs) {
        const outputsMD = createOutputsTable(metadata.outputs, outputAlignment)
        core.setOutput(outputs.outputsMdTable, JSON.stringify(outputsMD))
    }

}

//  -----------------
export default action
//  -----------------