import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
	name: "appointment",
	initialState: { appointments: null },
	reducers: {
		getAppointments: async (state, action) => {
			state.appointments = action.payload.data;
		},
		makeAppointment: async (state, action) => {},
	},
});

export const { getAppointments } = appointmentSlice.actions;

export default appointmentSlice.reducer;
