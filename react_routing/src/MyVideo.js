import React from "react";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
    return (
      <ReactPlayer url='https://youtu.be/lGIKIAW4HBA' playing={true} loop={true} volume={0.5} />
    );
};
export default MyVideo;