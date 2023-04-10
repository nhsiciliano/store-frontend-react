import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

export const favsSlice = createSlice({
    name: "favs",
    initialState,
    reducers: {
        addToFavs: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeItem: (state, action) => {
            state.favorites=state.favorites.filter(item=>item.id !== action.payload)
        },
    },
});

export const { addToFavs, removeItem } = favsSlice.actions;

export default favsSlice.reducer;