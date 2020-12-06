import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import Button from '@/components/button';
import Tab from '@/components/tab';
import { RootState } from '@/reducer';
import { setCurrentSong, updatePlaylistVisible } from '@/reducer/song';

import styles from './index.module.scss';
import SongTable from '@/components/song-table';

const tabs = [
  { label: '播放列表', value: 'playlist' },
  { label: '历史记录', value: 'history' },
];

const Playlist = () => {
  const [activeTabKey, setActiveTabKey] = useState('playlist');
  const songs = useSelector((state: RootState) => state.song.songs);
  const nodeRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const visible = useSelector(
    (state: RootState) => state.song.ui.playlistVisible
  );
  useEffect(() => {
    if (!visible) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (nodeRef.current && !nodeRef.current.contains(target)) {
        dispatch(updatePlaylistVisible(false));
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [dispatch, visible]);

  const handlePlay = (id: number) => {
    const song = songs.find((item) => item.id === id);
    if (!song) return;
    dispatch(setCurrentSong({ ...song, status: 'play' }));
  };

  const len = songs.length;
  return (
    <div
      ref={nodeRef}
      className={cx(styles.playlist, { [styles['playlist-hide']]: !visible })}>
      <Tab
        data={tabs}
        activeValue={activeTabKey}
        onChange={(activeKey) => {
          setActiveTabKey(activeKey);
        }}
      />
      <div className={styles.header}>
        <div className={styles.count}>总{len}首</div>
        <div className={styles.btn}>
          <Button type='text' disabled={!len}>
            收藏全部
          </Button>
          <Button type='text' disabled={!len}>
            清空
          </Button>
        </div>
      </div>
      <div className={styles.list}>
        {len > 0 && (
          <SongTable onDoubleClick={handlePlay} hideHeader songs={songs} />
        )}
        {len === 0 && (
          <div className={styles.empty}>
            <div>你还没有添加任何歌曲！</div>
            <div>去首页发现音乐</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playlist;
