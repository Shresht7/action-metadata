//  Library
import * as fs from 'node:fs'
import * as jsYaml from 'js-yaml'

//  Type Definitions
import type { Action } from '../types'

/** Read action metadata file from the workspace */
export async function readActionYaml(src: string): Promise<Action> {
    const contents = await fs.promises.readFile(src, { encoding: 'utf-8' })
    const yaml = jsYaml.load(contents)
    return yaml as Action
}