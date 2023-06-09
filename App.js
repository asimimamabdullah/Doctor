import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Screens/Login";
import Register from "./app/Screens/Register";
import Tabs from "./app/Navigation/Tabs";
import FindDoctor from "./app/Screens/FindDoctor";
import MakeAppointment from "./app/Screens/MakeAppointment";
import ConfirmAppointment from "./app/Screens/ConfirmAppointment";
import Favorites from "./app/Screens/Favorites";
import AddRecord from "./app/Screens/AddRecord";
import Profile from "./app/Screens/Profile";
import MapsView from "./app/Screens/MapsView";
import { useEffect, useState } from "react";

import { store } from "./app/app/store";
import { Provider, useDispatch } from "react-redux";
// import { useGetFavoriteQuery } from "./app/redux/favorite/getFavorites";
// import { getFavorites } from "./app/redux/favorite/favoriteSlice";

const Stack = createNativeStackNavigator();

export default function App() {
	const [errorMsg, setErrorMsg] = useState(null);

	return (
		<Provider store={store}>
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
					<Stack.Screen
						name="Appointment"
						component={MakeAppointment}
						options={{
							headerShown: false,
						}}
					/>

					<Stack.Screen
						name="ConfirmAppointment"
						component={ConfirmAppointment}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="Favorite"
						component={Favorites}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="AddRecord"
						component={AddRecord}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Profile"
						component={Profile}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="MapsView"
						component={MapsView}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
				{/* <StatusBar style="auto" /> */}
			</NavigationContainer>
		</Provider>
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
