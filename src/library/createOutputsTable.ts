//  Helpers
import { markdownTable } from 'markdown-table'

//  Types
import type { ActionOutput, alignment } from '../types'

export function createOutputsTable(metadata: Record<string, ActionOutput>, align: alignment[] = ['c', 'l']) {
    const outputs = [['Output', 'Description']]
    for (const [key, value] of Object.entries(metadata)) {
        outputs.push([
            `\`${key}\``,
            value.description
        ])
    }
    return markdownTable(outputs, { align })
}