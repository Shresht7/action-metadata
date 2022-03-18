//  Helpers
import { markdownTable } from 'markdown-table'

//  Types
import type { ActionInput } from '../types'

export function createInputsTable(metadata: Record<string, ActionInput>) {
    const inputs = [['Input', 'Description', 'Default/Required']]
    for (const [key, value] of Object.entries(metadata)) {
        inputs.push([
            `\`${key}\``,
            value.description,
            value.required
                ? '**required**'
                : `\`${value.default}\``
        ])
    }
    return markdownTable(inputs, { align: ['c', 'l', 'r'] })
}