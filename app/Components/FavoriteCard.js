import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { orangeStar, redHeart } from "../../assets/icons";
import { Dimensions } from "react-native";

const FavoriteCard = ({ gotItem, navigation }) => {
	const { item } = gotItem;
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() => navigation.navigate("Appointment", { item })}>
			<View style={styles.iconsView}>
				<TouchableOpacity hitSlop={5}>
					<Image source={redHeart} style={styles.heartImage} />
				</TouchableOpacity>
			</View>

			<View>
				<Image
					resizeMode="center"
					source={item?.image}
					style={styles.doctorImage}
				/>
			</View>

			<View>
				<Text style={styles.doctorName}>{item?.name}</Text>
				<Text style={styles.doctorRate}>
					<Text>{item?.area}</Text>
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default FavoriteCard;

const styles = StyleSheet.create({
	card: {
		width: "48%",
		height: 170,
		backgroundColor: "#ffffff",
		borderRadius: 7,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		gap: 10,
	},
	iconsView: {
		width: "100%",
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	heartImage: { width: 22, height: 22 },
	doctorImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "blue",
	},
	doctorName: { fontSize: 14, fontWeight: 600, textAlign: "center" },
	doctorRate: { color: "#aaa", textAlign: "center" },
});
