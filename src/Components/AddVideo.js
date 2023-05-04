import React, { useEffect, useRef, useState } from "react";
import useDispatch from "../CustomHooks/VideosDispatch";
import "./AddVideo.css";

const initialState = {
  time: "",
  channel: "",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  const dispatch = useDispatch(); // this is the custom hook.

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
  };

  const handleChange = (e) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    editableVideo && setVideo(editableVideo);

    inputRef.current.focus();
  }, [editableVideo]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="channel"
          placeholder="channel"
          onChange={handleChange}
          value={video.channel}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          onChange={handleChange}
          value={video.time}
        />

        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
          value={video.views}
        />
        <br />
        <button type="submit" className="add_btn">
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
