import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react';

const Trailer = () => {
  const params = useParams();
  const key = params.ytTrailerId;
  const youtubeUrl = 'https://www.youtube.com/watch';

  return (
    <div className='react-player-container'>
      {key != null ? (
        <ReactPlayer
          controls='true'
          url={`${youtubeUrl}?v=${key}`}
          width='100%'
          height='100%'
        />
      ) : null}
    </div>
  );
};

export default Trailer;
