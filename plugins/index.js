'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {

    // Register sub-plugins
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'modules'),
        options: Object.assign({}, opts)
    })

}
