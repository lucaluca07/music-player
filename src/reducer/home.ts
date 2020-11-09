import { IBanner } from "@/service/api/common";
import { SongListProps } from "@/service/api/song";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import services from "@/service";
import { MVProps } from "@/service/api/mv";

interface HomeState {
  banners: IBanner[];
  songList: SongListProps[];
  personalizedMV: MVProps[];
  exclusiveMV: MVProps[];
}

const initialState: HomeState = {
  banners: [],
  songList: [],
  personalizedMV: [],
  exclusiveMV: [],
};

export const getBanner = createAsyncThunk("home/getBanner", async () => {
  const response = await services.getBanner();
  return response;
});

export const getPersonalized = createAsyncThunk(
  "home/getPersonalized",
  async () => {
    const response = await services.getPersonalized({ limit: 9 });
    return response;
  }
);
export const getPersonalizedMV = createAsyncThunk(
  "home/getPersonalizedMV",
  async () => {
    const response = await services.getPersonalizedMV();
    return response;
  }
);
export const getExclusiveMV = createAsyncThunk(
  "home/getExclusiveMV",
  async () => {
    const response = await services.getExclusiveMV({ limit: 4 });
    return response;
  }
);
export const getPersonalizedSong = createAsyncThunk(
  "home/getPersonalizedSong",
  async () => {
    const response = await services.getPersonalizedSong({});
    return response;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setBanners(state, action: PayloadAction<IBanner[]>) {
      state.banners = action.payload;
    },
  },
  extraReducers: {
    [getBanner.fulfilled.type]: (state, action: PayloadAction<IBanner[]>) => {
      state.banners = action.payload;
    },

    [getPersonalized.fulfilled.type]: (
      state,
      action: PayloadAction<SongListProps[]>
    ) => {
      state.songList = action.payload;
    },
    [getPersonalizedMV.fulfilled.type]: (
      state,
      action: PayloadAction<MVProps[]>
    ) => {
      state.personalizedMV = action.payload;
    },
    [getExclusiveMV.fulfilled.type]: (
      state,
      action: PayloadAction<MVProps[]>
    ) => {
      state.exclusiveMV = action.payload;
    },
  },
});

export const { setBanners } = homeSlice.actions;
export default homeSlice.reducer;
