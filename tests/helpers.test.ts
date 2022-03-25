//  Library
import { getMetadataFilePath } from '../src/helpers/getMetadataFilePath'

//  Tests
import { test } from '.'
import * as assert from 'node:assert'

test('metadata file should point to action.yml', () => {
    const metadata = getMetadataFilePath()
    assert.equal(metadata, 'action.yml')
})