import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: { data: null },
	reducers: {
		getFavorites: async (state, action) => {
			state.data = action.payload;
		},
		handleFavorite: (state, action) => {
			if (state.data?.includes(action.payload.id)) {
				const array = [...state.data];
				const filteredArray = array?.filter(
					(item) => item !== action.payload.id,
				);
				state.data = filteredArray;
			} else {
				if (state.data !== null) {
					const current = [...state.data, action.payload.id];
					state.data = current;
				} else if (state.data === null) state.data = [action.payload.id];
			}
		},
		// addToFavorite: (state, action) => {
		// 	const current = [...state.data];
		// 	state.data = current.push(action.payload);
		// },
		// removeFromFavorite: (state, action) => {
		// 	const array = [...state.data];
		// 	const filteredArray = array?.filter((item) => item !== id);
		// },
	},
});

export const { getFavorites, handleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

export const selectCurrentFavorite = (state) => state.favorite.data;
