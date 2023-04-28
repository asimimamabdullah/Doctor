import { apiSlice } from "../../app/api/apiSlice";

export const makeAppointment = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		makeAppointment: builder.mutation({
			query: (credentials) => ({
				url: "/appointment",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useMakeAppointmentMutation } = makeAppointment;
