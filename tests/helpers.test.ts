//  Library
import { getMetadataFilePath } from '../src/helpers/getMetadataFilePath'
import { readActionYaml } from '../src/helpers/readActionYaml'

//  Tests
import { test } from '.'
import * as assert from 'node:assert'

test('metadata file should point to action.yml', () => {
    const metadata = getMetadataFilePath()
    assert.equal(metadata, 'action.yml')
})

test('readActionYaml should return a parsed metadata file', async () => {
    const metadata = await readActionYaml('action.yml')
    assert.equal(metadata.name, 'action-metadata')
})