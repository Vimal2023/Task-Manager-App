const express = require('express');
const { get } = require('mongoose');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/resister', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;