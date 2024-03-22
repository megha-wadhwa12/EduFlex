const express = require("express");
const TopicRoutes = express.Router()
const { getAllTopics, getOneTopic, AddTopic,updateAllTopics, deleteTopic
} = require('./../Controllers/TopicControllers')

TopicRoutes.get('/',getAllTopics)

TopicRoutes.post('/signup', getOneTopic)

TopicRoutes.post('/login',AddTopic)

TopicRoutes.put('/:id', updateAllTopics)

TopicRoutes.delete('/:id', deleteTopic)


module.exports = TopicRoutes