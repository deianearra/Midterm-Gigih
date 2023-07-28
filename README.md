# Midterm-Gigih
# Tokopedia Play Clone

## Description
Tokopedia Play Clone is a web application that allows users to view a list of videos and add videos to a playlist. Users can play videos from the playlist and see the most played videos. The project is built using Node.js, Express.js, MongoDB, and Mongoose.

## Features
- View a list of videos with thumbnails from YouTube.
- Add videos to the playlist by providing video ID, thumbnail URL, and title.
- Play videos from the playlist and track their play count.
- View the playlist and see the most played videos.

## Additional Features (Bonus)
- User authentication with profile picture and username.
- Real-time comments using WebSockets.
- Search feature to find videos by keywords.

## How to Install & Run
1. Clone this repository to your local machine.
2. Install Node.js and MongoDB on your system.
3. Create a `.env` file in the root directory and set the following environment variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=<Your MongoDB URI>
   DATABASE_NAME=<Your Database Name>
