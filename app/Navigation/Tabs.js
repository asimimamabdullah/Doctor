import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../Screens/Home";
import { home, openBook, user, whiteHeart } from "../../assets/icons";
import Login from "../Screens/Login";
import Favorites from "../Screens/Favorites";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
				name="Profile"
				component={Login}
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
