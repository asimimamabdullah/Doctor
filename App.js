import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./app/Screens/Home";
import Login from "./app/Screens/Login";
import Register from "./app/Screens/Register";
import Tabs from "./app/Navigation/Tabs";
import FindDoctor from "./app/Screens/FindDoctor";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Tabs"
				screenOptions={{
					headerShown: true,
				}}>
				<Stack.Screen
					name="Tabs"
					component={Tabs}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Find"
					component={FindDoctor}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
			{/* <StatusBar style="auto" /> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
