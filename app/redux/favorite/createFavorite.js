import { apiSlice } from "../../app/api/apiSlice";

export const createFavorite = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createFavorite: builder.mutation({
			query: (credentials) => ({
				url: "/favorite",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useCreateFavoriteMutation } = createFavorite;
