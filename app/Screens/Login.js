import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	Button,
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={{ flex: 1, backgroundColor: "#afe4ec" }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#ffffff", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.01 }}
				end={{ x: 0.7, y: 1.5 }}
				style={styles.button}>
				<SafeAreaView style={{ flex: 1 }}>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							// backgroundColor: "blue",
						}}>
						<View
							style={{
								flex: 1,
								// backgroundColor: "green",
								justifyContent: "space-around",
							}}>
							<Text
								style={{
									fontSize: 24,
									textAlign: "center",
									marginBottom: 25,
								}}>
								Welcome back
							</Text>
							{/* Buttons  row */}
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									paddingHorizontal: 20,
								}}>
								{/* Button */}
								<View
									style={{
										paddingVertical: 15,
										backgroundColor: "dodgerblue",
										flex: 0.48,
										borderRadius: 8,
									}}>
									<Image />
									<Text style={{ textAlign: "center" }}>Google</Text>
								</View>
								{/* Button */}
								<View
									style={{
										paddingVertical: 15,
										backgroundColor: "dodgerblue",
										flex: 0.48,
										borderRadius: 8,
									}}>
									<Image />
									<Text style={{ textAlign: "center" }}>Facebook</Text>
								</View>
							</View>
							{/* Input fields */}
							<View
								style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
								<View>
									<TextInput
										value={email}
										onChangeText={(t) => setEmail(t)}
										placeholder="Enter Email"
										style={{
											borderColor: "#aaa",
											borderWidth: 1,
											marginVertical: 5,
											fontSize: 16,
											paddingVertical: 8,
											paddingHorizontal: 10,
											borderRadius: 8,
											color: "#777",
										}}

										//Image here of if email is valid or not
									/>
								</View>

								<View>
									<TextInput
										value={password}
										onChangeText={(t) => setPassword(t)}
										placeholder="Password"
										style={{
											borderColor: "#aaa",
											borderWidth: 1,
											marginVertical: 5,
											fontSize: 16,
											paddingVertical: 8,
											paddingHorizontal: 10,
											borderRadius: 8,
											color: "#777",
										}}
									/>
								</View>
							</View>

							<View
								style={{
									marginHorizontal: 20,
									borderRadius: 12,
									backgroundColor: "green",
									paddingVertical: 15,
									paddingHorizontal: 10,
									justifyContent: "center",
								}}>
								<Text
									style={{
										textAlign: "center",
										fontSize: 20,
										color: "#fff",
									}}>
									Login
								</Text>
							</View>

							{/* Forgot password button Link */}
							<View style={{ marginTop: 30, justifyContent: "center" }}>
								<Text
									style={{
										textAlign: "center",
										fontSize: 15,
										color: "green",
									}}>
									Forgot Password
								</Text>
							</View>
						</View>
					</View>

					<View
						style={{
							bottom: 40,
							justifyContent: "center",
						}}>
						<Text style={{ textAlign: "center", color: "green" }}>
							Don't have an account? Join Us
						</Text>
					</View>

					{/* <Text style={styles.text}>Sign in with Facebook</Text> */}
				</SafeAreaView>
			</LinearGradient>
			<StatusBar style="dark" />
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "green",
	},
	button: {
		flex: 1,
	},
});
