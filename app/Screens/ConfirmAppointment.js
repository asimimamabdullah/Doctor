import {
	Image,
	// Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { leftArrow, like, rightArrow } from "../../assets/icons";
import { StatusBar } from "expo-status-bar";

const ConfirmAppointment = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const toggleVisible = () => {
		setModalVisible(!modalVisible);
	};
	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.1 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<SafeAreaView
					style={{
						...styles.fullFlex,
						paddingHorizontal: 20,
						marginVertical: 10,
					}}>
					{/* header */}
					<View style={styles.header}>
						<TouchableOpacity
							hitSlop={10}
							style={styles.headerIconView}
							onPress={() => navigation.goBack()}>
							<Image source={leftArrow} style={styles.headerIcon} />
						</TouchableOpacity>
						<Text style={{ ...styles.headerText }}>Appointment</Text>
					</View>

					{/* date div */}
					<View
						style={{
							backgroundColor: "rgb(14,190,126)",
							marginVertical: 30,
							borderRadius: 7,
							paddingVertical: 10,
						}}>
						<View style={{ flexDirection: "row", padding: 10 }}>
							<Text
								style={{
									flex: 0.88,
									fontSize: 18,
									fontWeight: 600,
									color: "#ffffff",
								}}>
								February 2021
							</Text>

							{/* left arrow and right arrow */}
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									flex: 0.12,
									alignItems: "center",
								}}>
								<TouchableOpacity hitSlop={8}>
									<Image
										source={leftArrow}
										style={{
											width: 17,
											height: 17,
											tintColor: "#ffffff",
										}}
									/>
								</TouchableOpacity>
								<TouchableOpacity hitSlop={8}>
									<Image
										source={rightArrow}
										style={{
											width: 17,
											height: 17,
											tintColor: "#ffffff",
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					{/* Date  */}
					<View style={{ marginVertical: 20 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 600,
								textAlign: "center",
							}}>
							Date
						</Text>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								marginVertical: 10,
							}}>
							<View
								style={{
									borderRadius: 30,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgb(14,190,126)",
									width: 60,
									height: 60,
								}}>
								<Text
									style={{
										fontSize: 17,
										color: "#ffffff",
										fontWeight: 600,
									}}>
									23
								</Text>
							</View>
						</View>
					</View>
					{/* Day */}
					<View style={{ marginVertical: 20 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 600,
								textAlign: "center",
							}}>
							Day
						</Text>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								marginVertical: 10,
							}}>
							<View
								style={{
									borderRadius: 30,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgb(14,190,126)",
									width: 60,
									height: 60,
								}}>
								<Text
									style={{
										fontSize: 17,
										color: "#ffffff",
										fontWeight: 600,
									}}>
									{"Sunday".substring(0, 3)}
								</Text>
							</View>
						</View>
					</View>

					<Modal
						hasBackdrop={true}
						isVisible={modalVisible}
						style={{
							marginHorizontal: 20,
							borderRadius: 20,
							justifyContent: "space-between",
							paddingHorizontal: 20,
							paddingVertical: 25,
							marginVertical: 120,
							backgroundColor: "#ffffff",
							gap: 20,
						}}>
						<View style={{ gap: 15 }}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
								}}>
								<View
									style={{
										padding: 25,
										borderRadius: 70,
										backgroundColor: "#B2EEC7",
									}}>
									<Image
										source={like}
										style={{
											width: 80,
											height: 80,
											tintColor: "rgb(14,190,126)",
										}}
									/>
								</View>
							</View>

							<View style={{ alignItems: "center" }}>
								<Text style={{ fontSize: 35, fontWeight: 700 }}>
									Thank You!
								</Text>
								<Text
									style={{
										fontSize: 18,
										letterSpacing: 0.5,
										color: "#aaa",
										fontWeight: 500,
									}}>
									Your Appointment Successful
								</Text>
							</View>

							<View style={{ marginTop: 30 }}>
								<Text
									style={{
										color: "#aaa",
										textAlign: "center",
									}}>
									You booked an appointment with Dr. Pediatrician
									Puperson on February 21, at 2:00 PM
								</Text>
							</View>
						</View>

						<View style={{ gap: 20 }}>
							<TouchableOpacity
								onPress={() => {
									toggleVisible();
									navigation.navigate("Tabs");
								}}
								style={{
									backgroundColor: "rgb(14,190,126)",
									paddingVertical: 15,
									borderRadius: 10,
								}}>
								<Text
									style={{
										color: "#ffffff",
										fontSize: 18,
										fontWeight: 600,
										textAlign: "center",
									}}>
									Done
								</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text
									style={{
										color: "#aaaaaa",
										fontSize: 14,
										textAlign: "center",
									}}>
									Edit your appointment
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
					{/* Confirm Button */}
					<View
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<TouchableOpacity
							onPress={toggleVisible}
							style={{
								padding: 15,
								justifyContent: "center",
								backgroundColor: "rgb(14,190,126)",
								borderRadius: 10,
								bottom: 40,
							}}>
							<Text
								style={{
									textAlign: "center",
									color: "#ffffff",
									fontSize: 16,
									fontWeight: 500,
								}}>
								Confirm
							</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</LinearGradient>
			<StatusBar style="light" />
		</View>
	);
};

export default ConfirmAppointment;

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
