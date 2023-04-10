import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	avatar,
	invoice,
	leftArrow,
	prescription,
	report,
} from "../../assets/icons";
import { StatusBar } from "expo-status-bar";

const AddRecord = ({ navigation }) => {
	const [selectedRecord, setSelectedRecord] = useState("");
	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.3 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<SafeAreaView
					style={{
						...styles.fullFlex,
						// paddingHorizontal: 20,
						marginVertical: 10,
					}}>
					{/* header */}
					<View style={{ ...styles.header, paddingHorizontal: 20 }}>
						<TouchableOpacity
							hitSlop={10}
							style={styles.headerIconView}
							onPress={() => navigation.goBack()}>
							<Image source={leftArrow} style={styles.headerIcon} />
						</TouchableOpacity>
						<Text style={{ ...styles.headerText }}>Add Records</Text>
					</View>

					{/* record upper view  */}
					<View
						style={{
							// marginVertical: 50,
							paddingHorizontal: 20,
							height: "40%",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<View
							style={{
								backgroundColor: "#ffffff",
								borderRadius: 40,
								overflow: "hidden",
							}}>
							<Image
								style={{
									width: 70,
									height: 70,
								}}
								source={avatar}
							/>
						</View>
					</View>

					<View
						style={{
							borderTopLeftRadius: 25,
							borderTopRightRadius: 25,
							flex: 1,
							backgroundColor: "#ffffff",
							padding: 20,
							justifyContent: "space-between",
						}}>
						<View>
							{/* record for  */}
							<View
								style={{
									paddingBottom: 20,
									borderBottomColor: "#dddddd",
									borderBottomWidth: 1,
								}}>
								<Text style={{ fontSize: 16, fontWeight: 600 }}>
									Record for
								</Text>
								<Text
									style={{
										marginTop: 10,
										color: "rgb(14,190,126)",
										fontWeight: 700,
										fontSize: 18,
									}}>
									Vishali Sood
								</Text>
							</View>
							{/* type of record  */}

							<View style={{ marginVertical: 10 }}>
								<Text style={{ fontSize: 18, fontWeight: 700 }}>
									Type of record
								</Text>

								<View
									style={{
										flexDirection: "row",
										gap: 35,
										marginVertical: 15,
										borderBottomWidth: 1,
										borderBottomColor: "#dddddd",
										paddingBottom: 20,
									}}>
									<TouchableOpacity
										onPress={() => setSelectedRecord("report")}
										style={{
											justifyContent: "center",
											alignItems: "center",
											gap: 5,
										}}>
										<Image
											source={report}
											style={{
												width: 30,
												height: 30,
												tintColor:
													selectedRecord === "report"
														? "rgb(14,190,126)"
														: "#999",
											}}
										/>
										<Text
											style={{
												color:
													selectedRecord === "report"
														? "rgb(14,190,126)"
														: "#999999",
											}}>
											Report
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => setSelectedRecord("prescription")}
										style={{
											justifyContent: "center",
											alignItems: "center",
											gap: 5,
										}}>
										<Image
											source={prescription}
											style={{
												width: 30,
												height: 30,
												tintColor:
													selectedRecord === "prescription"
														? "rgb(14,190,126)"
														: "#999",
											}}
										/>
										<Text
											style={{
												color:
													selectedRecord === "prescription"
														? "rgb(14,190,126)"
														: "#999999",
											}}>
											Prescription
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => setSelectedRecord("invoice")}
										style={{
											justifyContent: "center",
											alignItems: "center",
											gap: 5,
										}}>
										<Image
											source={invoice}
											style={{
												width: 30,
												height: 30,
												tintColor:
													selectedRecord === "invoice"
														? "rgb(14,190,126)"
														: "#777777",
											}}
										/>
										<Text
											style={{
												color:
													selectedRecord === "invoice"
														? "rgb(14,190,126)"
														: "#999999",
											}}>
											Invoice
										</Text>
									</TouchableOpacity>
								</View>
							</View>

							{/* record created on */}
							<View
								style={{
									paddingBottom: 20,
									borderBottomColor: "#dddddd",
									borderBottomWidth: 1,
								}}>
								<Text style={{ fontSize: 16, fontWeight: 600 }}>
									Record created on
								</Text>
								<Text
									style={{
										marginTop: 10,
										color: "rgb(14,190,126)",
										fontWeight: 700,
										fontSize: 18,
									}}>
									21 February, 2023
								</Text>
							</View>
						</View>
						<View>
							<TouchableOpacity
								style={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgb(14,190,126)",
									padding: 15,
									borderRadius: 12,
								}}>
								<Text
									style={{
										color: "#ffffff",
										fontWeight: 600,
										fontSize: 18,
									}}>
									Update Record
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</SafeAreaView>

				<StatusBar style="light" />
			</LinearGradient>
		</View>
	);
};

export default AddRecord;

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
