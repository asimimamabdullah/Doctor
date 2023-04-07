import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Register = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={{ flex: 1, backgroundColor: "#afe4ec" }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#ffffff", "#ffffff", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.01 }}
				end={{ x: 0.7, y: 1.5 }}
				style={{ flex: 1 }}>
				<SafeAreaView style={{ flex: 1 }}>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<View
							style={{
								flex: 1,
								top: 50,
								justifyContent: "space-around",
							}}>
							<Text
								style={{
									fontSize: 26,
									textAlign: "center",
								}}>
								Welcome to find a Doctor
							</Text>
							{/* Buttons  row */}
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									paddingHorizontal: 20,
									marginTop: 60,
									marginBottom: 20,
								}}>
								{/* Button */}
								<TouchableOpacity
									style={{
										paddingVertical: 15,
										backgroundColor: "#fff",
										flex: 0.48,
										borderRadius: 12,
										elevation: 2,
									}}>
									<Image />
									<Text style={{ textAlign: "center", fontSize: 16 }}>
										Google
									</Text>
								</TouchableOpacity>
								{/* Button */}
								<TouchableOpacity
									style={{
										paddingVertical: 15,
										backgroundColor: "#fff",
										flex: 0.48,
										borderRadius: 12,
										elevation: 2,
									}}>
									<Image />
									<Text style={{ textAlign: "center", fontSize: 16 }}>
										Facebook
									</Text>
								</TouchableOpacity>
							</View>
							{/* Input fields */}
							<View
								style={{
									paddingTop: 15,
									paddingHorizontal: 20,
								}}>
								{/* Name */}
								<View>
									<TextInput
										value={name}
										onChangeText={(t) => setName(t)}
										placeholder="Name"
										style={{
											borderColor: "#ddd",
											borderWidth: 1,
											marginVertical: 8,
											fontSize: 16,
											paddingVertical: 12,
											paddingHorizontal: 10,
											borderRadius: 12,
											color: "#777",
										}}

										//Image here of if email is valid or not
									/>
								</View>
								{/* Email */}
								<View>
									<TextInput
										value={email}
										onChangeText={(t) => setEmail(t)}
										placeholder="Email"
										style={{
											borderColor: "#ddd",
											borderWidth: 1,
											marginVertical: 8,
											fontSize: 16,
											paddingVertical: 12,
											paddingHorizontal: 10,
											borderRadius: 12,
											color: "#777",
										}}

										//Image here of if email is valid or not
									/>
								</View>
								{/* Password Field */}
								<View>
									<TextInput
										value={password}
										onChangeText={(t) => setPassword(t)}
										placeholder="Password"
										style={{
											borderColor: "#ddd",
											borderWidth: 1,
											marginVertical: 8,
											fontSize: 16,
											paddingVertical: 12,
											paddingHorizontal: 10,
											borderRadius: 12,
											color: "#777",
										}}
									/>
								</View>
							</View>

							{/* Terms and conditions */}
							<View style={{ paddingHorizontal: 20 }}>
								<Image style={{ width: 20, height: 20 }} />
								<Text style={{}}>
									I agree with the terms of Services & Privacy Policy
								</Text>
							</View>

							<TouchableOpacity
								style={{
									marginHorizontal: 20,
									borderRadius: 12,
									backgroundColor: "rgb(14,190,126)",
									paddingVertical: 15,
									paddingHorizontal: 10,
									marginTop: 35,
									justifyContent: "center",
								}}>
								<Text
									style={{
										textAlign: "center",
										fontSize: 20,
										color: "#fff",
									}}>
									Sign Up
								</Text>
							</TouchableOpacity>

							{/* Forgot password button Link */}
							<View style={{ marginTop: 30, justifyContent: "center" }}>
								<Text
									style={{
										textAlign: "center",
										fontSize: 15,
										color: "green",
									}}></Text>
							</View>
						</View>
					</View>

					<TouchableOpacity
						style={{
							bottom: 40,
							justifyContent: "center",
						}}
						onPress={() => navigation.navigate("Login")}>
						<Text style={{ textAlign: "center", color: "green" }}>
							Have an account? Log in
						</Text>
					</TouchableOpacity>

					{/* <Text style={styles.text}>Sign in with Facebook</Text> */}
				</SafeAreaView>
			</LinearGradient>
			<StatusBar style="dark" />
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({});
