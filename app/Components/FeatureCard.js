import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { orangeStar, redHeart } from "../../assets/icons";

const FeatureCard = ({ item }) => {
	return (
		<View style={styles.card}>
			<View style={styles.iconsView}>
				<TouchableOpacity>
					<Image source={redHeart} style={styles.heartImage} />
				</TouchableOpacity>
				<View style={styles.ratingView}>
					<Image source={orangeStar} style={styles.ratingIcon} />
					<Text style={styles.ratingText}>{item?.rating.overall}</Text>
				</View>
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
					<Text
						style={{
							color: "rgb(14,190,126)",
							fontWeight: 600,
							fontSize: 16,
						}}>
						£
					</Text>{" "}
					<Text>
						{item?.rate}
						/hour
					</Text>
				</Text>
			</View>
		</View>
	);
};

export default FeatureCard;

const styles = StyleSheet.create({
	card: {
		width: 130,
		height: 160,
		backgroundColor: "#ffffff",
		marginRight: 15,
		borderRadius: 7,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	iconsView: {
		width: "100%",
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	heartImage: { width: 18, height: 18 },
	ratingView: { flexDirection: "row", alignItems: "center" },
	ratingIcon: { width: 16, height: 16 },
	ratingText: { fontWeight: 600 },
	doctorImage: {
		width: 70,
		height: 70,
		borderRadius: 30,
		backgroundColor: "blue",
	},
	doctorName: { fontSize: 14, fontWeight: 600, textAlign: "center" },
	doctorRate: { color: "#aaa", textAlign: "center" },
});
