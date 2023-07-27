
const playlistService = require('../services/playlist.service');

exports.addVideoToPlaylist = async (req, res) => {
  try {
    const { videoID, thumbnailUrl, title } = req.body;

    await playlistService.addVideoToPlaylist(videoID, thumbnailUrl, title);

    res.status(201).json({ message: 'Video added to the playlist successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

exports.playVideoFromPlaylist = async (req, res) => {
  try {
    const { videoID } = req.body;

    await playlistService.playVideoFromPlaylist(videoID);

    res.status(200).json({ message: 'Video is now playing.' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

exports.getPlaylist = async (req, res) => {
  try {
    const playlist = await playlistService.getPlaylist();

    res.status(200).json({ playlist });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
};
