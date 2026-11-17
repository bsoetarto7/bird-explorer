import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FavouritesState = {
  birdIds: number[];
};

const initialState: FavouritesState = {
  birdIds: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<number>) => {
      if (!state.birdIds.includes(action.payload)) {
        state.birdIds.push(action.payload);
      }
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.birdIds = state.birdIds.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
