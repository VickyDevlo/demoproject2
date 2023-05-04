import { useContext } from "react";
import VideoContext from "../Components/ContextData/VideoContext";

const useVideos = () => {
  return useContext(VideoContext);
};

export default useVideos;
