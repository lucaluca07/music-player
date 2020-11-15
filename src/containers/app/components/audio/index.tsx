import React, { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducer/index';

const AudioPlayer = () => {
  const current = useSelector((state: RootState) => state.song.current);
  const url: string = current?.url;
  const audio = useMemo(() => new Audio(), []);
  useEffect(() => {
    if (!url) return;
    audio.src = url;
    audio.play();
  }, [audio, url]);
  return null;
};

export default AudioPlayer;
