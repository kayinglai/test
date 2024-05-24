import React, { useState, useEffect } from 'react';

import Image from './components/Image';
import Spinner from './components/Spinner';
import Map from './components/Map';
import YTVideo from './components/YTVideo';


import reactImage from './images/react.png';

function App() {


  const videos = [
    {
      duration: '5:30',
      title: 'This is a longer and more useful Video Title',
      channel: 'Channel Name Here',
      views: '89K views - 2 months ago',
      thumbnail: 'https://picsum.photos/250/150'
    },
    {
      duration: '3:20',
      title: 'Video Title',
      channel: 'Im Here',
      views: '33K views - 1 month ago',
      thumbnail: 'https://picsum.photos/250/150'
    },
    {
      duration: '1:02',
      title: 'CCC College',
      channel: 'CCC',
      views: '1 view - 2 minutes ago',
      thumbnail: 'https://picsum.photos/250/150'
    },

  ]

  const [videosArray, setVideos] = useState(videos);


  return (
    <div className="App">
      {videos.map((video, index) => (
        <YTVideo key={index} {...video} />
      ))}
    </div >
  );
}

export default App;


