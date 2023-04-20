import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const MapsView = () => {
	const [location, setLocation] = useState(undefined);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	console.log(location);

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ width: "100%", height: "100%" }}
				region={{
					latitude: 37.4226711,
					longitude: -122.0849872,
				}}
			/>
			{/* <Text>MapsView</Text> */}
		</View>
	);
};

export default MapsView;

const styles = StyleSheet.create({});
