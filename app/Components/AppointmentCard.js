import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { orangeStar, redHeart } from "../../assets/icons";

const AppointmentCard = ({ item }) => {
	return (
		<View
			style={{
				padding: 20,
				borderRadius: 10,
				height: 120,
				backgroundColor: "#ffffff",
				elevation: 2,
				flexDirection: "row",
			}}>
			<View>
				<Image
					source={item?.image}
					style={{ width: 90, height: 90, borderRadius: 10 }}
				/>
			</View>

			<View
				style={{
					flex: 1,
					marginLeft: 15,
					justifyContent: "center",
					// gap: 10,
				}}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<Text style={{ fontSize: 17, fontWeight: 600 }}>
						{item?.name}
					</Text>
					<TouchableOpacity style={{}}>
						<Image source={redHeart} style={{ width: 20, height: 20 }} />
					</TouchableOpacity>
				</View>
				<Text style={{ color: "#bbb", fontSize: 12 }}>{item?.area}</Text>
				<View style={{ flexDirection: "row", marginTop: 10 }}>
					{Array(5)
						.fill(2)
						.map((_, i) => (
							<Image
								key={i}
								source={orangeStar}
								style={{ width: 15, height: 15 }}
							/>
						))}
				</View>
			</View>
		</View>
	);
};

export default AppointmentCard;

const styles = StyleSheet.create({});
