const Router = require('express').Router()

const getAllTeams = require('../controller/teamController')

Router.get('/api/v1/teams', getAllTeams)

module.exports = Router;