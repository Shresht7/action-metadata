//  Library
import * as fs from 'node:fs'

/** Locate the action metadata file (either action.yml or action.yaml) */
export function getMetadataFilePath() {
    const possibleNames = ['action.yml', 'action.yaml']
    for (const fileName of possibleNames) {
        if (fs.existsSync(fileName)) {
            return fileName
        }
    }
}