import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/auth/loginAPISlice";
import { store } from "../app/store";
import { selectCurrentToken, setCredentials } from "../redux/auth/authSlice";

const Login = ({ navigation }) => {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	const token = useSelector(selectCurrentToken);
	const [login, { loading }] = useLoginMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	useEffect(() => {
		if (token) navigation.navigate("Tabs");
	}, []);

	const handleSubmit = async () => {
		try {
			const userData = await login({
				email,
				password,
			}).unwrap();

			console.log("userdata: ", userData);
			dispatch(
				setCredentials({
					...userData,
				}),
			);
			setPassword("");
			navigation.navigate("Tabs");
		} catch (err) {
			console.log("login erro: ", err);
			setErrMsg(err?.data?.error);
		}
	};

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
						}}>
						<View
							style={{
								flex: 1,
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
								<TouchableOpacity
									style={{
										paddingVertical: 15,
										backgroundColor: "#fff",
										elevation: 2,
										flex: 0.48,
										borderRadius: 8,
									}}>
									<Image />
									<Text style={{ textAlign: "center" }}>Google</Text>
								</TouchableOpacity>
								{/* Button */}
								<TouchableOpacity
									style={{
										paddingVertical: 15,
										backgroundColor: "#fff",
										elevation: 2,
										flex: 0.48,
										borderRadius: 8,
									}}>
									<Image />
									<Text style={{ textAlign: "center" }}>Facebook</Text>
								</TouchableOpacity>
							</View>
							{/* Input fields */}
							<View
								style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
								<View>
									<TextInput
										value={email}
										onChangeText={(t) => setEmail(t)}
										placeholder="Email"
										style={{
											borderColor: "#dddddd",
											borderWidth: 1,
											marginVertical: 8,
											fontSize: 16,
											paddingVertical: 10,
											paddingHorizontal: 10,
											borderRadius: 8,
											color: "#777",
										}}

										//Image here of if email is valid or not
									/>
								</View>

								<View style={{ elevation: 10 }}>
									<TextInput
										value={password}
										onChangeText={(t) => setPassword(t)}
										placeholder="Password"
										secureTextEntry={true}
										style={{
											borderColor: "#dddddd",
											borderWidth: 1,
											marginVertical: 8,
											fontSize: 16,
											paddingVertical: 10,
											paddingHorizontal: 10,
											borderRadius: 8,
											color: "#777",
										}}
									/>
								</View>
							</View>

							<TouchableOpacity
								onPress={handleSubmit}
								style={{
									marginHorizontal: 20,
									borderRadius: 12,
									backgroundColor: "rgb(14,190,126)",
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
							</TouchableOpacity>

							{/* Forgot password button Link */}
							<TouchableOpacity
								onPress={() => {}}
								style={{ marginTop: 30, justifyContent: "center" }}>
								<Text
									style={{
										textAlign: "center",
										fontSize: 15,
										color: "green",
									}}>
									Forgot Password
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity
						style={{
							bottom: 40,
							justifyContent: "center",
						}}
						hitSlop={10}
						onPress={() => navigation.navigate("Register")}>
						<Text style={{ textAlign: "center", color: "green" }}>
							Don't have an account? Join Us
						</Text>
					</TouchableOpacity>

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
