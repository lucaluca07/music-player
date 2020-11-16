import { updateCurrentTime } from "@/reducer/song";
import throttle from "@/utils/throttle";
import { useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../reducer/index";

const AudioPlayer = () => {
  const current = useSelector((state: RootState) => state.song.current);
  const dispatch = useDispatch();
  const url: string = current?.url || "";
  const audio = useMemo(() => new Audio(), []);

  const updateSongTime = useCallback(
    throttle(() => {
      dispatch(updateCurrentTime(audio.currentTime * 1000));
    }, 60),
    [audio, dispatch]
  );

  useEffect(() => {
    if (!url) return;
    audio.src = url;
  }, [audio, url]);

  useEffect(() => {
    if(current?.status === 'play') {
      audio.play();
    }
    if(current?.status === 'pause') {
      audio.pause();
    }
  }, [audio, current])

  useEffect(() => {
    audio.ontimeupdate = updateSongTime;
  }, [audio, updateSongTime]);
  return null;
};

export default AudioPlayer;
