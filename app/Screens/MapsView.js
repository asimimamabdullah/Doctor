import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { car, pin, red_pin } from "../../assets/icons";
import { store } from "../app/store";

const MapsView = ({ navigation }) => {
	const mapView = useRef();

	const [streetName, setStreetName] = useState("");
	const [fromLocation, setFromLocation] = useState(null);
	const [toLocation, setToLocation] = useState(null);
	const [region, setRegion] = useState(null);

	useEffect(() => {
		let fromLoc = store.getState().auth.location;
		let toLoc = store.getState().auth.location;
		let street = store.getState().auth.regionName[0].street;

		let mapRegion = {
			latitude: (fromLoc.latitude + toLoc.latitude) / 2,
			longitude: (fromLoc.longitude + toLoc.longitude) / 2,
			latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
			longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
		};

		setStreetName(street);
		setFromLocation(fromLoc);
		setToLocation(toLoc);
		setRegion(mapRegion);
	}, []);

	function zoomIn() {
		let newRegion = {
			latitude: region.latitude,
			longitude: region.longitude,
			latitudeDelta: region.latitudeDelta / 2,
			longitudeDelta: region.longitudeDelta / 2,
		};

		setRegion(newRegion);
		mapView.current.animateToRegion(newRegion, 200);
	}

	function zoomOut() {
		let newRegion = {
			latitude: region.latitude,
			longitude: region.longitude,
			latitudeDelta: region.latitudeDelta * 2,
			longitudeDelta: region.longitudeDelta * 2,
		};

		setRegion(newRegion);
		mapView.current.animateToRegion(newRegion, 200);
	}

	function renderMap() {
		const destinationMarker = () => (
			<Marker coordinate={toLocation}>
				<View
					style={{
						height: 40,
						width: 40,
						borderRadius: 20,
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: COLORS.white,
					}}>
					<View
						style={{
							height: 30,
							width: 30,
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: COLORS.primary,
						}}>
						<Image
							source={pin}
							style={{
								width: 25,
								height: 25,
								tintColor: COLORS.white,
							}}
						/>
					</View>
				</View>
			</Marker>
		);

		const carIcon = () => (
			<Marker
				coordinate={fromLocation}
				anchor={{ x: 0.5, y: 0.5 }}
				flat={true}>
				<Image
					source={car}
					style={{
						width: 40,
						height: 40,
					}}
				/>
			</Marker>
		);

		return (
			<View style={{ flex: 1 }}>
				<MapView
					ref={mapView}
					provider={PROVIDER_GOOGLE}
					initialRegion={region}
					style={{ flex: 1 }}>
					{destinationMarker()}
					{carIcon()}
				</MapView>
			</View>
		);
	}

	function renderDestinationHeader() {
		return (
			<View
				style={{
					position: "absolute",
					top: 50,
					left: 0,
					right: 0,
					height: 50,
					alignItems: "center",
					justifyContent: "center",
				}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						width: SIZES.width * 0.9,
						paddingVertical: SIZES.padding,
						paddingHorizontal: SIZES.padding * 2,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.white,
					}}>
					<Image
						source={red_pin}
						style={{
							width: 30,
							height: 30,
							marginRight: SIZES.padding,
						}}
					/>

					<View style={{ flex: 1 }}>
						<Text style={{ ...FONTS.body3 }}>
							{streetName ? streetName : null}
						</Text>
					</View>

					<Text style={{ ...FONTS.body3 }}>20 mins</Text>
				</View>
			</View>
		);
	}

	function renderInfo() {
		return (
			<View
				style={{
					position: "absolute",
					bottom: 50,
					left: 0,
					right: 0,
					alignItems: "center",
					justifyContent: "center",
				}}>
				<View
					style={{
						width: SIZES.width * 0.9,
						paddingVertical: SIZES.padding * 3,
						paddingHorizontal: SIZES.padding * 2,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.white,
					}}>
					{/* Buttons */}
					<View
						style={{
							flexDirection: "row",
							marginTop: SIZES.padding * 2,
							justifyContent: "space-between",
						}}>
						<TouchableOpacity
							style={{
								flex: 1,
								height: 50,
								marginRight: 10,
								backgroundColor: COLORS.primary,
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10,
							}}
							onPress={() => navigation.navigate("Tabs")}>
							<Text style={{ ...FONTS.h4, color: COLORS.white }}>
								Ok
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								flex: 1,
								height: 50,
								backgroundColor: COLORS.secondary,
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10,
							}}
							onPress={() => navigation.goBack()}>
							<Text style={{ ...FONTS.h4, color: COLORS.white }}>
								Cancel
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

	function renderButtons() {
		return (
			<View
				style={{
					position: "absolute",
					bottom: SIZES.height * 0.35,
					right: SIZES.padding * 2,
					width: 60,
					height: 130,
					justifyContent: "space-between",
				}}>
				{/* Zoom In */}
				<TouchableOpacity
					style={{
						width: 60,
						height: 60,
						borderRadius: 30,
						backgroundColor: COLORS.white,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => zoomIn()}>
					<Text style={{ ...FONTS.body1 }}>+</Text>
				</TouchableOpacity>

				{/* Zoom Out */}
				<TouchableOpacity
					style={{
						width: 60,
						height: 60,
						borderRadius: 30,
						backgroundColor: COLORS.white,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => zoomOut()}>
					<Text style={{ ...FONTS.body1 }}>-</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			{renderMap()}
			{renderDestinationHeader()}
			{renderInfo()}
			{renderButtons()}
		</View>
	);
};

export default MapsView;
