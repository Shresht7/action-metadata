//  Library
import * as fs from 'node:fs'
import * as jsYaml from 'js-yaml'
import { path } from '../config'

//  Type Definitions
import type { Action } from '../types'

/** Read action metadata file from the workspace */
export async function readActionYaml(src: string = path): Promise<Action> {
    const contents = await fs.promises.readFile(src, { encoding: 'utf-8' })
    const yaml = jsYaml.load(contents)
    console.log(yaml)
    return yaml as Action
}