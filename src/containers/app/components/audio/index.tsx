import { updateSongInfo } from "@/reducer/song";
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
      dispatch(updateSongInfo({ currentTime: audio.currentTime * 1000 }));
    }, 32),
    [audio, dispatch]
  );

  useEffect(() => {
    if (!url) return;
    audio.src = url;
  }, [audio, url]);

  useEffect(() => {
    if (current?.status === "play") {
      audio.play();
    }
    if (current?.status === "pause") {
      audio.pause();
    }
  }, [audio, current]);

  useEffect(() => {
    audio.ontimeupdate = updateSongTime;
    // play next song
    audio.onended = () => dispatch(updateSongInfo({ status: 'pause' }));
  }, [audio, dispatch, updateSongTime]);
  return null;
};

export default AudioPlayer;
