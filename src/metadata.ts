//  ===============
//  ACTION METADATA
//  ===============

/** Action Inputs */
export const inputs = {
    inputAlignment: 'input-table-alignment',
    outputAlignment: 'output-table-alignment'
} as const

/** Action Outputs */
export const outputs = {
    metadata: 'metadata',
    name: 'name',
    author: 'author',
    description: 'description',
    inputsMdTable: 'inputs-md-table',
    outputsMdTable: 'outputs-md-table'
} as const
