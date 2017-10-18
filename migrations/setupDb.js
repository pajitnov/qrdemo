'use strict'
require('dotenv').config({ path: '../.env' })
const knex = require('knex')

const dbName = process.env.MYSQL_DB || 'partition_test' //setup db name as config params

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
  },
  pool: {
    min: 1,
    max: 10
  }
})

connection.raw(`CREATE SCHEMA IF NOT EXISTS ${dbName}`)
  .then(() => {
    console.log('Dev db created successfully')
    process.exit(0)
  })
  .catch((err) => {
    throw err
  })
