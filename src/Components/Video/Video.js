import React from "react";
import useDispatch from "../../CustomHooks/VideosDispatch";
import "./Video.css";

const Video = ({ id, title, channel, views, time, verified, editVideo }) => {
  
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button
        className="close"
        onClick={() => dispatch({ type: "DELETE", payload: id })}
      >
        X
      </button>
      <button className="edit" onClick={() => editVideo(id)}>
        edit
      </button>
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/200/120`} alt="img" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✅"}
      </div>
      <div className="views">
        {views} <span>.</span>
        {time}
      </div>
    </div>
  );
};

export default Video;
