import { apiSlice } from "../../app/api/apiSlice";

export const deleteFavorite = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		deleteFavorite: builder.mutation({
			query: (credentials) => ({
				url: "/favorite",
				method: "DELETE",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useDeleteFavoriteMutation } = deleteFavorite;
