import { fillerup } from "../../assets/images";
const date = new Date();

export const doctors = [
	{
		id: 0,
		name: "Dr. Fillerup Grab",
		area: "Medicine specialist",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: fillerup,
		dates: date.getDate(),
		booked: {},
		doctorsTiming: {
			afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
			evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
		},
	},
	{
		id: 1,
		name: "Dr. Fillerup Grab",
		area: "Medicine specialist",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: fillerup,
		doctorsTiming: {
			afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
			evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
		},
	},
	{
		id: 2,
		name: "Dr. Fillerup Grab",
		area: "Medicine specialist",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: fillerup,
		doctorsTiming: {
			afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
			evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
		},
	},
	{
		id: 3,
		name: "Dr. Fillerup Grab",
		area: "Medicine specialist",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: fillerup,
		doctorsTiming: {
			afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
			evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
		},
	},
];
