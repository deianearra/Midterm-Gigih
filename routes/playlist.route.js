const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

router.post('/addSong', playlistController.addVideoToPlaylist);

router.post('/playSong', playlistController.playVideoFromPlaylist);

router.get('/getPlaylist', playlistController.getPlaylist);

router.get('/getMostPlayed', playlistController.getMostPlayed);

module.exports = router;
