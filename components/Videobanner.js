import React, { useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height};

  .video-container {
    position: relative;
    height: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    z-index: -1;
    //contain: size; //Makes it fill
    inline-size: auto;
  }
  .pause-btn {
    color: var(--color-four);
    position: absolute;
    bottom: 10px;
    background: transparent;
    border: none;
    border-radius: 12px;
    z-index: 9999;
  }
  .content {
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Videobanner = (props) => {
  const [play, setPlay] = useState(true);

  return (
    <VideoContainer height={props.height}>
      <div className="video-container">
        <video
          className="video-background"
          muted
          loop
          autoPlay={play ? true : false}
        >
          <source src="lake_video.mp4" type="video/mp4" />
        </video>
        <button
          className="pause-btn"
          onClick={() => {
            play
              ? document.querySelector('.video-background').pause()
              : document.querySelector('.video-background').play();
            setPlay(!play);
          }}
        >
          Play
        </button>
      </div>
      <div className="content">{props.children}</div>
    </VideoContainer>
  );
};

export default Videobanner;
