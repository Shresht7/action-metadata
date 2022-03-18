//  Library
import * as fs from 'node:fs'
import * as path from 'node:path'

/** Locate the action metadata file (either action.yml or action.yaml) */
export function getMetadataFilePath(workspace: string) {
    const possibleNames = ['action.yml', 'action.yaml']
    for (const fileName of possibleNames) {
        const filePath = path.join(workspace, fileName)
        if (fs.existsSync(filePath)) {
            return filePath
        }
    }
}