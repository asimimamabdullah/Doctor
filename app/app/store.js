import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../redux/auth/authSlice.js";
import favoriteReducer from "../redux/favorite/favoriteSlice.js";
// import authReduc
export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		favorite: favoriteReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware,
		),
	devTools: true,
});
