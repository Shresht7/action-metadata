/** Create markdown table for the given rows */
export function createMarkdownTable(rows: any[][], headers?: any[]) {
    headers = headers || rows.shift()!
    const md = ['\n']
    md.push(createRow(headers))
    md.push(createRow(headers.map(h => '-'.repeat(h.length))))
    for (const row of rows) {
        md.push(createRow(row))
    }
    md.push('\n')
    return md.join('\n')
}

/** Create a single markdown table row */
function createRow(row: any[]) {
    return '| ' + row.join(' | ') + ' |'
}

// TODO: Pretty-Print Markdown Table
// TODO: Adjustable Text-Alignment