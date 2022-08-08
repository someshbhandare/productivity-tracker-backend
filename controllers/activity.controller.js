// 1. get activities
// 2. add activity
const mongoose = require('mongoose');
const ActivityModel = require('../models/Activity.model');

const getActivities = async (req, res) => {
    try{
        const activities = await (await ActivityModel.find()).reverse();
        res.status(200).json(activities);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

const addActivity = async (req, res) => {
    const activity = new ActivityModel({
        name: req.body.name,
        time: req.body.time
    });
    try{
        const newActivity = await activity.save();
        res.status(201).json(newActivity);
    }catch(err){
        res.status(404).json({ message: err.message});
    }
};

module.exports = {
    getActivities,
    addActivity
}