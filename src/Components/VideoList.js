import React from "react";
import Video from "./Video/Video";
import useVideos from "../CustomHooks/Videos";

const VideoList = ({ editVideo }) => {
  const videoData = useVideos(); //this is custom hook.
  return (
    <>
      {videoData.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          editVideo={editVideo}
        />
      ))}
    </>
  );
};

export default VideoList;
