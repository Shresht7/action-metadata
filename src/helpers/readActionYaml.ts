//  Library
import * as fs from 'node:fs'
import * as jsYaml from 'js-yaml'
import { path } from '../config'

/** Read action.yaml file from the workspace */
export async function readActionYaml<T>(target: string = path) {
    const contents = await fs.promises.readFile(target, { encoding: 'utf-8' })
    const yaml = jsYaml.load(contents)
    return yaml as T
}