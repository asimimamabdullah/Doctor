import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { leftArrow } from "../../assets/icons";
import AppointmentCard from "../Components/AppointmentCard";
import { doctors } from "../data/doctors";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../redux/auth/authSlice";

const content = (navigation, doctor, token) => {
	const [dates, setDates] = useState([]);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [booked, setBooked] = useState({
		"Tomorrow, 8 April": ["1:30"],
	});
	const [errorMsg, setErrorMsg] = useState("");
	const [timeSlots, setTimeSlots] = useState({
		afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"],
		evening: ["5:00", "5:30", "6:00", "6:30", "7:00"],
	});
	const [timeData, setTimeData] = useState({ date: "", time: "" });
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	useEffect(() => {
		const now = new Date();
		const arr = new Array(7).fill(2);
		let allDates = [];
		arr.forEach((_, index) => {
			now.setDate(new Date().getDate() + index);
			const s =
				(index === 0
					? "Today"
					: index === 1
					? "Tomorrow"
					: days[now.getDay()]) +
				", " +
				now.getDate() +
				" " +
				months[now.getMonth()];
			allDates.push(s);
		});
		setDates(allDates);
	}, []);

	const findSlots = (date) => {
		setTimeData((prev) => ({ ...prev, date: date }));
		setSelectedDate(date);
		return (
			doctors[0]?.doctorsTiming?.afternoon?.length +
			doctors[0]?.doctorsTiming?.evening?.length
		);
	};

	const isBooked = (v = "1:30") => {
		const d = Object.keys(booked);
		if (d.includes(selectedDate)) {
			for (let i = 0; i < d.length; i++) {
				if (booked[d[i]] === d[selectedDate]) {
					if (booked[d[i]].includes(v)) return true;
					else return false;
				}
			}

			// Object.keys(booked).forEach(val => {
			// 	if(
			// 		booked[val] === booked[selectedDate] &&
			// 		(booked[selectedDate].includes(v) )
			// 	)
			// })
		}
	};

	const interval = () => {
		setErrorMsg("Please Login");
		setInterval(() => {
			setErrorMsg(null);
		}, 3000);
	};
	return (
		<View style={{ marginVertical: 15 }}>
			{errorMsg && (
				<View
					style={{
						position: "absolute",
						top: 30,
						left: 100,
						backgroundColor: "red",
						paddingHorizontal: 20,
						paddingVertical: 10,
						zIndex: 3,
					}}>
					<Text style={{ fontSize: 16, color: "#fff" }}>{errorMsg}</Text>
				</View>
			)}
			<FlatList
				data={dates}
				horizontal
				style={{}}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => findSlots(item)}
							style={{
								borderWidth: 1,
								borderColor: "#ccc",
								paddingHorizontal: 20,
								justifyContent: "center",
								alignItems: "center",
								paddingVertical: 10,
								marginRight: 15,
								minWidth: 160,
								maxWidth: 200,
								borderRadius: 10,
								backgroundColor:
									item === selectedDate
										? "rgb(14,190,126)"
										: "transparent",
							}}>
							<Text
								style={{
									fontSize: 17,
									fontWeight: 600,
									color: item === selectedDate ? "#ffffff" : "black",
								}}
								numberOfLines={1}>
								{item}
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: item === selectedDate ? "#eeeeee" : "#bbbbbb",
								}}>{`5 slots available`}</Text>
						</TouchableOpacity>
					);
				}}
			/>

			<Text style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
				{dates[0]}
			</Text>

			<View style={{ marginTop: 30 }}>
				<Text style={{ marginVertical: 15, fontSize: 20, fontWeight: 600 }}>
					Afternoon 7 slots
				</Text>
				<View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
					{timeSlots?.afternoon?.map((val, index) =>
						isBooked ? (
							<TouchableOpacity
								key={index}
								onPress={() => {
									setTimeData((prev) => ({ ...prev, time: val }));
									setSelectedTime(val);
								}}
								style={{
									width: 85,
									paddingHorizontal: 15,
									paddingVertical: 10,
									backgroundColor:
										selectedTime === val
											? "rgb(14,190,126)"
											: "#D1F2D5",
									borderRadius: 8,
									justifyContent: "center",
									alignItems: "center",
									elevation: 1,
									marginVertical: 5,
								}}>
								<Text
									style={{
										color:
											selectedTime === val
												? "#ffffff"
												: "rgb(14,190,126)",
										fontWeight: 600,
									}}>
									{val}
								</Text>
							</TouchableOpacity>
						) : null,
					)}
				</View>
			</View>

			<View style={{ marginTop: 30 }}>
				<Text style={{ marginVertical: 15, fontSize: 20, fontWeight: 600 }}>
					Evening 5 slots
				</Text>
				<View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
					{timeSlots?.evening?.map((val, index) => (
						<TouchableOpacity
							onPress={() => {
								setTimeData((prev) => ({ ...prev, time: val }));
								setSelectedTime(val);
							}}
							key={index}
							style={{
								width: 85,
								paddingHorizontal: 15,
								paddingVertical: 10,
								backgroundColor: "#D1F2D5",
								borderRadius: 8,
								justifyContent: "center",
								alignItems: "center",
								elevation: 1,
								marginVertical: 5,
								backgroundColor:
									selectedTime === val ? "rgb(14,190,126)" : "#D1F2D5",
							}}>
							<Text
								style={{
									color: "rgb(14,190,126)",
									color:
										selectedTime === val
											? "#ffffff"
											: "rgb(14,190,126)",
								}}>
								{val}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>

			<View style={{ marginTop: 30, flexDirection: "row" }}>
				<TouchableOpacity
					onPress={() =>
						token
							? timeData.date !== "" || timeData.time !== ""
								? navigation.navigate("ConfirmAppointment", {
										timeData,
										doctor,
								  })
								: null
							: interval()
					}
					style={{
						backgroundColor: "rgb(14,190,126)",
						justifyContent: "center",
						alignItems: "center",
						flex: 1,
						paddingVertical: 15,
						borderRadius: 10,
						marginHorizontal: 20,
					}}>
					<Text style={{ color: "#ffffff", fontSize: 18 }}>Book Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const MakeAppointment = ({ route, navigation }) => {
	const { item } = route.params;
	const token = useSelector(selectCurrentToken);

	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.1 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<SafeAreaView style={{ ...styles.fullFlex, paddingHorizontal: 20 }}>
					{/* header */}
					<View style={styles.header}>
						<TouchableOpacity
							style={styles.headerIconView}
							onPress={() => navigation.goBack()}>
							<Image source={leftArrow} style={styles.headerIcon} />
						</TouchableOpacity>
						<Text style={{ ...styles.headerText }}>Select Time</Text>
					</View>

					<View style={{ marginVertical: 15, top: 10 }}>
						<AppointmentCard item={item} />
					</View>
					{content(navigation, item, token)}

					{/* <View style={{ marginTop: 15, flexDirection: "row" }}>
						{dates?.map((val, index) => {
							const doctor = new Doctor();

							return (
								<View
									style={{
										borderWidth: 1,
										borderColor: "#aaa",
										paddingHorizontal: 20,
										// paddingVertical: 10,
										justifyContent: "center",
										alignItems: "center",
										width: 160,
									}}>
									<Text style={{ fontSize: 17, fontWeight: 600 }}>
										{val}
										 {dates.length > 0 ? Date(dates[2].toString()) : null}
									</Text>
									<Text
										style={{
											fontSize: 12,
											color: "#bbbbbb",
										}}>{`${doctor.availableAppointments()} slots available`}</Text>
								</View>
							);
						})}
					</View> */}
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

export default MakeAppointment;

const styles = StyleSheet.create({
	fullFlex: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		gap: 30,
		marginTop: 10,
		alignItems: "center",
	},
	headerText: { fontSize: 20, fontWeight: 600 },
	headerIconView: {
		padding: 8,
		backgroundColor: "white",
		borderRadius: 10,
	},
	headerIcon: { width: 15, height: 15, tintColor: "#000000" },
});
