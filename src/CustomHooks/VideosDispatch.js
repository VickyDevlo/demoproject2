import { useContext } from "react";
import VideoDispatchContext from "../Components/ContextData/VideoDispatchContext";

const useDispatch = () => {
  return useContext(VideoDispatchContext);
};

export default useDispatch;
