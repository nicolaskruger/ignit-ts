const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = './swagger.json'

const enpointsFiles = ['./src/routes/index.ts']

const doc = {
  info: {
    title: 'rentex',
    description: 'car things'
  },
  host: 'localhost:3333',
  schemes: ['http']
}

swaggerAutogen(outputFile, enpointsFiles, doc)
