import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { orangeStar, whiteStar } from "../../assets/icons";

const PopularCard = ({ item }) => {
	return (
		<View style={styles.card}>
			<Image
				source={item?.image}
				style={{ ...styles.cardImage }}
				resizeMode="center"
			/>
			<View style={styles.cardTextContainer}>
				<Text style={styles.cardName}>{item?.name}</Text>
				<Text style={styles.cardArea}>{item?.area}</Text>
				{/* ratings */}
				<View style={styles.cardRating}>
					{Array(5)
						.fill(2, 0, 5)
						.map((_, i) => (
							<Image
								key={i}
								source={
									item?.rating.overall - 1 >= i
										? orangeStar
										: whiteStar
								}
								style={styles.ratingImage}
							/>
						))}
				</View>
			</View>
		</View>
	);
};

export default PopularCard;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		gap: 10,
		maxHeight: 300,
		maxWidth: 225,
		height: 280,
		width: 210,
		borderRadius: 8,
		top: 5,
		marginHorizontal: 5,
		marginVertical: 5,
		backgroundColor: "white",
		elevation: 1,
	},
	cardImage: {
		flex: 1,
		backgroundColor: "purple",
		borderTopRightRadius: 8,
		borderTopLeftRadius: 8,
		width: "100%",
	},
	cardTextContainer: {
		bottom: 5,
		justifyContent: "center",
		alignItems: "center",
		gap: 0,
	},
	cardName: { fontSize: 18, fontWeight: 600 },
	cardArea: { fontSize: 13, color: "#bbb" },
	cardRating: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
		paddingVertical: 5,
	},
	ratingImage: { width: 15, height: 15 },
});
