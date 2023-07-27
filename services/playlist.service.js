const Video = require('../models/video.model');


exports.addVideoToPlaylist = async (videoID, thumbnailUrl, title) => {
  const newVideo = new Video({
    videoID,
    thumbnailUrl,
    title,
  });

  await newVideo.save();
};

exports.playVideoFromPlaylist = async (videoID) => {
  const video = await Video.findById(videoID);
  if (!video) {
    throw new Error('Video not found.');
  }

  video.playCount++;
  await video.save();
};

exports.getPlaylist = async () => {
  return await Video.find();
};
