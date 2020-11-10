import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import services from "@/service";
import store from "../store";

interface Current {
  id: number;
  name: string;
  al: any;
  ar: any;
}
interface CounterState {
  songs: Current[];
  current: Current | null;
}

export const getRecommedSongs = createAsyncThunk(
  "song/getRecommedSongs",
  async () => {
    const response = await services.getRecommedSongs();
    return response;
  }
);

export const getPlayListSongs = createAsyncThunk(
  "song/getPlayListSongs",
  async ({ id, s }: { id: number; s?: number }) => {
    const response = await services.getPlaylistDetail({ id, s });
    const songs = await services.getSongDetail({
      ids: response?.playlist?.trackIds?.map((item) => item.id),
    });
    return songs;
  }
);

export const setCurrentSong = createAsyncThunk<
  Current,
  number,
  { state: any }
>("song/setCurrentSong", async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const songs = state.song.songs;
  const current = songs.find((song: any) => song.id === id);
  const [detail, lyric] = await Promise.all([
    services.getSongUrl({ id }),
    services.getLyric({ id }),
  ]);
  // get url
  // get 歌词
  return current;
});

const initialState: CounterState = { songs: [], current: null };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecommedSongs.fulfilled.type]: (state, action) => {
      state.songs = action.payload;
      // state.current = action.payload[0];
    },
    [getPlayListSongs.fulfilled.type]: (state, action) => {
      state.songs = action.payload;
      store.dispatch(setCurrentSong(action.payload[0].id));
    },
    [setCurrentSong.fulfilled.type]: (state, action) => {
      state.current = action.payload;
    },
  },
});

// export const {  } = counterSlice.actions;
export default counterSlice.reducer;
