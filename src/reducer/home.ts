import { IBanner } from '@/service/api/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface HomeState {
  banners: IBanner[];
}

const initialState: HomeState = { banners: [] };

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBanners(state, action: PayloadAction<IBanner[]>) {
      state.banners = action.payload;
    },
  },
});

export const { setBanners } = homeSlice.actions;
export default homeSlice.reducer;
