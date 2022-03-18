//  Helpers
import { markdownTable } from 'markdown-table'

//  Types
import type { ActionOutput } from '../types'

export function createOutputsTable(metadata: Record<string, ActionOutput>) {
    const outputs = [['Output', 'Description']]
    for (const [key, value] of Object.entries(metadata)) {
        outputs.push([
            `\`${key}\``,
            value.description
        ])
    }
    return markdownTable(outputs, { align: ['c', 'l'] })
}