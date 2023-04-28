import { apiSlice } from "../../app/api/apiSlice";

export const getFavorites = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFavorite: builder.query({
			query: () => ({
				url: "/favorite",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetFavoriteQuery } = getFavorites;
