export class Doctor {
	constructor() {
		// this.doctorsData.name = name;
	}
	doctorsData = {
		afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
		evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
	};

	availableAppointments() {
		return (
			this.doctorsData.afternoon.length + this.doctorsData.evening.length
		);
	}

	bookAppointment(v = "1:30") {
		const d = Object.keys(this.doctorsData);

		d.forEach((val) => {
			const index = this.doctorsData[val].indexOf("1:30");
			if (index >= 0) this.doctorsData[val].splice(index, 1);
		});
		return this.doctorsData;
		// this.doctorsTiming.afternoon.filter((val) => v !== val);
	}
}
