import { useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./Components/AddVideo";
import VideoContext from "./Components/ContextData/VideoContext";
import VideoDispatchContext from "./Components/ContextData/VideoDispatchContext";
import videos from "./Components/Data/Data";
import VideoList from "./Components/VideoList";

function App() {
  const [editableVideo, seteditableVideo] = useState(null);

  const videoReducer = (videoData, action) => {
    switch (action.type) {
      case "ADD":
        return [...videoData, { ...action.payload, id: videoData.length + 1 }];

      case "DELETE":
        return videoData.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videoData.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videoData];
        newVideos.splice(index, 1, action.payload);
        seteditableVideo(null);
        return newVideos;

      default:
        return videoData;
    }
  };
  const [videoData, dispatch] = useReducer(videoReducer, videos);

  //Edit video
  const editVideo = (id) => {
    seteditableVideo(videoData.find((video) => video.id === id));
  };

  return (
    <VideoContext.Provider value={videoData}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className="App">
          <AddVideo editableVideo={editableVideo} />
          <VideoList editVideo={editVideo} />
        </div>
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
