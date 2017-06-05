var path = require('path')
var express = require('express')

var redditRoutes = require('./reddit')
var urbanRoutes = require('./urban-dictionary')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/reddit', redditRoutes)
server.use('/api/urbandictionary', urbanRoutes)

module.exports = server
