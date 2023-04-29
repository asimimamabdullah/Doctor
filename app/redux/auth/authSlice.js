import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: null, location: null, regionName: null },
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.token = accessToken;
		},

		logOut: (state, action) => {
			state.user = null;
			state.token = null;
		},
		setLocationGlobal: (state, action) => {
			state.location = action.payload.location;
			state.regionName = action.payload.regionName;
		},
	},
});

export const { setCredentials, logOut, setLocationGlobal } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
