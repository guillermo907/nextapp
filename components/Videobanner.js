import React from 'react';
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
  return (
    <VideoContainer height={props.height}>
      <div className="video-container">
        <video muted loop autoPlay>
          <source src="lake_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">{props.children}</div>
    </VideoContainer>
  );
};

export default Videobanner;
