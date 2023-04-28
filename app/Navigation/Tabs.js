import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../Screens/Home";
import { home, openBook, user, whiteHeart } from "../../assets/icons";
import * as Location from "expo-location";
import Favorites from "../Screens/Favorites";
import Profile from "../Screens/Profile";
import { store } from "../app/store";
import { setLocationGlobal } from "../redux/auth/authSlice";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [location, setLocation] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			let regionName = await Location.reverseGeocodeAsync({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});

			if (location && regionName) {
				store.dispatch(
					setLocationGlobal({
						location: location.coords,
						regionName: regionName,
					}),
				);
			}

			setLocation({ location: location.coords, regionName });
		})();
	}, []);

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 70,
					paddingHorizontal: 10,
					bottom: 0,
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					backgroundColor: "white",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								padding: 10,
								backgroundColor: focused
									? "rgb(14,190,126)"
									: "transparent",

								borderRadius: 30,
							}}>
							<Image
								source={home}
								style={{
									tintColor: focused ? "white" : "#888888",
									width: 26,
									height: 26,
								}}
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="Favorite"
				component={Favorites}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								padding: 10,
								backgroundColor: focused
									? "rgb(14,190,126)"
									: "transparent",

								borderRadius: 30,
							}}>
							<Image
								source={whiteHeart}
								style={{
									tintColor: focused ? "white" : "#888888",
									width: 26,
									height: 26,
								}}
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="Appointments"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								padding: 10,
								backgroundColor: focused
									? "rgb(14,190,126)"
									: "transparent",

								borderRadius: 30,
							}}>
							<Image
								source={openBook}
								style={{
									tintColor: focused ? "white" : "#888888",
									width: 26,
									height: 26,
								}}
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name={"Profile"}
				component={Profile}
				options={{
					tabBarStyle: { display: "none" },
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								padding: 10,
								backgroundColor: focused
									? "rgb(14,190,126)"
									: "transparent",

								borderRadius: 30,
							}}>
							<Image
								source={user}
								style={{
									tintColor: focused ? "white" : "#888888",
									width: 26,
									height: 26,
								}}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;

const styles = StyleSheet.create({});
