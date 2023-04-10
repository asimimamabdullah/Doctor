import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { avatar, camera, edit, leftArrow } from "../../assets/icons";

const Profile = ({ navigation }) => {
	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.1 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<View
					style={{
						height: "47%",
						backgroundColor: "rgb(14,190,126)",
						borderRadius: 35,
					}}>
					<SafeAreaView
						style={{
							...styles.fullFlex,
						}}>
						<View
							style={{
								flex: 1,
								paddingHorizontal: 20,
								gap: 20,
							}}>
							{/* header */}
							<View style={styles.header}>
								<TouchableOpacity
									hitSlop={10}
									style={styles.headerIconView}
									onPress={() => navigation.goBack()}>
									<Image
										source={leftArrow}
										style={styles.headerIcon}
									/>
								</TouchableOpacity>
								<Text
									style={{ ...styles.headerText, color: "#ffffff" }}>
									Profile
								</Text>
							</View>

							<View style={{ padding: 30, gap: 20 }}>
								<Text
									style={{
										color: "#ffffff",
										fontWeight: 600,
										fontSize: 16,
										textAlign: "center",
									}}>
									Set up your profile
								</Text>
								<Text
									style={{
										textAlign: "center",
										color: "#ffffff",
										fontSize: 14,
									}}>
									Upload your profile to connect your doctor with
									better impression.
								</Text>
							</View>

							{/* avatar */}

							<TouchableOpacity>
								<View
									style={{
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Image
										source={avatar}
										style={{ width: 60, height: 60 }}
									/>
								</View>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "center",
										left: 35,
									}}>
									<View
										style={{
											padding: 8,
											borderRadius: 30,
											backgroundColor: "#eee",
										}}>
										<Image
											source={camera}
											style={{ width: 18, height: 18 }}
										/>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</View>

				<View style={{ padding: 20 }}>
					<Text style={{ fontSize: 16, fontWeight: 700 }}>
						Personal Information
					</Text>
					<View
						style={{
							backgroundColor: "#ffffff",
							marginVertical: 10,
							paddingVertical: 8,
							paddingHorizontal: 15,
							borderRadius: 12,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View
							style={{
								gap: 5,
							}}>
							<Text style={{ fontSize: 12, color: "rgb(14,190,126)" }}>
								Name
							</Text>
							<Text style={{ color: "#aaaaaa", fontSize: 16 }}>
								Vishali Sood
							</Text>
						</View>
						<TouchableOpacity hitSlop={5}>
							<Image
								source={edit}
								style={{ width: 16, height: 16, tintColor: "#aaaaaa" }}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							backgroundColor: "#ffffff",
							marginVertical: 10,
							paddingVertical: 8,
							paddingHorizontal: 15,
							borderRadius: 12,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View
							style={{
								gap: 5,
							}}>
							<Text style={{ fontSize: 12, color: "rgb(14,190,126)" }}>
								Contact Number
							</Text>
							<Text style={{ color: "#aaaaaa", fontSize: 16 }}>
								+923137816717
							</Text>
						</View>
						<TouchableOpacity hitSlop={5}>
							<Image
								source={edit}
								style={{ width: 16, height: 16, tintColor: "#aaaaaa" }}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							backgroundColor: "#ffffff",
							marginVertical: 10,
							paddingVertical: 8,
							paddingHorizontal: 15,
							borderRadius: 12,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View
							style={{
								gap: 5,
							}}>
							<Text style={{ fontSize: 12, color: "rgb(14,190,126)" }}>
								Date of birth
							</Text>
							<Text style={{ color: "#aaaaaa", fontSize: 16 }}>
								04 05 1998
							</Text>
						</View>
						<TouchableOpacity hitSlop={5}>
							<Image
								source={edit}
								style={{ width: 16, height: 16, tintColor: "#aaaaaa" }}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							backgroundColor: "#ffffff",
							marginVertical: 10,
							paddingVertical: 8,
							paddingHorizontal: 15,
							gap: 5,
							borderRadius: 12,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View>
							<Text style={{ fontSize: 12, color: "rgb(14,190,126)" }}>
								Location
							</Text>
							<Text style={{ color: "#aaaaaa", fontSize: 16 }}>
								Add Details
							</Text>
						</View>
						<TouchableOpacity hitSlop={5}>
							<Image
								source={edit}
								style={{ width: 16, height: 16, tintColor: "#aaaaaa" }}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 10 }}>
						<TouchableOpacity
							style={{
								padding: 15,
								backgroundColor: "rgb(14,190,126)",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 12,
							}}>
							<Text style={{ color: "#ffffff", fontSize: 16 }}>
								Sign out
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};

export default Profile;

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
