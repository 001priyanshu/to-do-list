const express = require('express')

const homeController = require('../controllers/home_controller')
const router = express.Router();

router.get('/', homeController.find);
router.post('/create-task',homeController.createTask)
router.post('/delete-task',homeController.delete);
router.post('/temp',homeController.temp);


module.exports = router