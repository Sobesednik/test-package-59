const assert = require('assert')
const context = require('../context/')
const testPackage_59 = require('../../src/')

const testPackage_59TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_59, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_59()
        })
    },
}

module.exports = testPackage_59TestSuite
