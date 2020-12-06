import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import services from '@/service';

interface Current {
  id: number;
  name: string;
  duration: number;
  album: any;
  artists: { name: string }[];
  url?: string;
  lyric?: any;
  currentTime?: number;
  status?: 'play' | 'pause';
}
interface CounterState {
  ui: {
    playlistVisible: boolean;
  };
  songs: Current[];
  current: Current | null;
}

type Keys = keyof Current;

type Foo<T extends Keys, P> = {
  [key in T]: P;
};

type SongInfoPayloads = {
  [K in Keys]: Foo<K, Current[K]>;
};

type SongInfoPayload = SongInfoPayloads[Keys];

export const playSong = createAsyncThunk(
  'song/PlaySong',
  async ({
    song,
    status = 'play',
  }: {
    song: Current;
    status?: 'play' | 'pause';
  }) => {
    const id = song.id;
    const [detail, lyric] = await Promise.all([
      services.getSongUrl({ id }), // url
      services.getLyric({ id }), // 歌词
    ]);

    return { ...song, status, url: (detail as any)?.[0]?.url, lyric };
  }
);

export const getRecommedSongs = createAsyncThunk(
  'song/getRecommedSongs',
  async () => {
    const response = await services.getRecommedSongs();
    return response;
  }
);

export const getPlayListSongs = createAsyncThunk(
  'song/getPlayListSongs',
  async ({ id, s }: { id: number; s?: number }) => {
    const response = await services.getPlaylistDetail({ id, s });
    const songs = await services.getSongDetail({
      ids: response?.playlist?.trackIds?.map((item) => item.id),
    });
    return songs;
  }
);

export const getCurrentDetail = createAsyncThunk(
  'song/getCurrentDetail',
  async (id: number) => {
    const [detail, lyric] = await Promise.all([
      services.getSongUrl({ id }), // url
      services.getLyric({ id }), // 歌词
    ]);
    return { id, url: (detail as any)?.[0]?.url, lyric };
  }
);

const initialState: CounterState = {
  songs: [],
  current: null,
  ui: {
    playlistVisible: false,
  },
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updatePlaylistVisible: (state, action: PayloadAction<boolean>) => {
      state.ui.playlistVisible = action.payload;
    },
    updateCurrentTime: (state, action: PayloadAction<number>) => {
      if (!state?.current) return;
      state.current.currentTime = action.payload;
    },
    updateSongInfo: (state, action: PayloadAction<SongInfoPayload>) => {
      if (!state?.current) return;
      state.current = { ...state!.current, ...action.payload };
    },
    setCurrentSong: (state, action: PayloadAction<Current>) => {
      state.current = action.payload;
    },
  },
  extraReducers: {
    [getRecommedSongs.fulfilled.type]: (state, action) => {
      const current = action.payload[0];
      state.songs = action.payload;
      state.current = current;
    },
    [getPlayListSongs.fulfilled.type]: (state, action) => {
      const current = action.payload[0];
      const {
        dt: duration,
        id,
        ar: artists,
        al: album,
        name,
      } = action.payload[0];
      current.status = 'play';
      state.current = { duration, id, artists, name, album, status: 'play' };
      state.songs = action.payload;
    },
    [getCurrentDetail.fulfilled.type]: (state, action) => {
      state.current = { ...state!.current, ...action.payload };
    },
    [playSong.fulfilled.type]: (state, action) => {
      state.current = { ...(state?.current || {}), ...action.payload };
    },
  },
});

export const {
  updateCurrentTime,
  updateSongInfo,
  updatePlaylistVisible,
  setCurrentSong,
} = counterSlice.actions;
export default counterSlice.reducer;
