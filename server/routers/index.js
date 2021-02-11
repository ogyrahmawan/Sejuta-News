const Controllers = require('../controllers')

const route = require('express').Router()

route.get('/', Controllers.getNews)

module.exports = route

