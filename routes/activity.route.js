const express = require('express');
const router = express.Router();
const { getActivities, addActivity } = require('../controllers/activity.controller')

router.get("/activities", getActivities);
router.post("/activity", addActivity);

module.exports = router;