import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import services from '@/service';

interface Current {
  id: number;
  name: string;
  dt: number;
  al: any;
  ar: any;
  url: any;
  lyric: any;
}
interface CounterState {
  songs: Current[];
  current: Current | null;
}

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

const initialState: CounterState = { songs: [], current: null };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecommedSongs.fulfilled.type]: (state, action) => {
      const current = action.payload[0];
      state.songs = action.payload;
      state.current = current;
    },
    [getPlayListSongs.fulfilled.type]: (state, action) => {
      const current = action.payload[0];
      state.current = current;
      state.songs = action.payload;
    },
    [getCurrentDetail.fulfilled.type]: (state, action) => {
      state.current = { ...state!.current, ...action.payload };
    },
  },
});

// export const {  } = counterSlice.actions;
export default counterSlice.reducer;
