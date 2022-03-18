//  Library
import { markdownTable } from 'markdown-table'

//  Types
import type { ActionInput, alignment } from '../types'

/** Create markdown-table string for the given array */
export function createInputsTable(metadata: Record<string, ActionInput>, align: alignment[] = ['l', 'l', 'r', 'c']) {
    const inputs = [['Input', 'Description', 'Default', 'Required']]
    for (const [key, value] of Object.entries(metadata)) {
        inputs.push([
            `\`${key}\``,
            value.description,
            `\`${value.default}\`` || '',
            value.required ? '**required**' : ''
        ])
    }
    return markdownTable(inputs, { align })
}