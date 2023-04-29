import { doctorImage, fillerup, happy, other } from "../../assets/images";
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
	},
	{
		id: 1,
		name: "Dr. Vaishali",
		area: "Eye Surgeon",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: doctorImage,
	},
	{
		id: 2,
		name: "Dr. Mortego gauge",
		area: "Medicine specialist",
		rating: {
			positive: 87,
			overall: 4,
			stories: 56,
		},
		rate: "29:00",
		experience: 7,
		image: happy,
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
		image: other,
	},
];
