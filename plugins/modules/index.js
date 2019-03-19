'use strict'

module.exports = async function (fastify, opts) {
  
    fastify.route({
      method: 'GET',
      url: '/test',
      handler: async (request, reply) => 'test'
    })
    
}