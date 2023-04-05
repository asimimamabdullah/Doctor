import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { location, redHeart } from "../../assets/icons";

const FindCard = ({ item }) => {
	return (
		<View style={styles.findCard}>
			<View style={styles.findCardContainer}>
				<View>
					<Image
						source={item?.image}
						style={styles.findCardImage}
						resizeMode="cover"
					/>
				</View>
				{/* text  */}
				<View style={{ marginLeft: 15, flex: 1 }}>
					{/* name view */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						{/* name  */}
						<Text style={{ fontSize: 18 }}>{item?.name}</Text>

						{/* icon */}
						<TouchableOpacity>
							<Image
								source={redHeart}
								style={{ width: 24, height: 24 }}
							/>
						</TouchableOpacity>
					</View>
					<Text style={{ color: "rgb(14,190,126)" }}>{item?.area}</Text>
					<Text style={{ color: "#999" }}>
						{item?.experience} years experience
					</Text>

					{/* progress view */}
					<View style={{ flexDirection: "row", bottom: 0 }}>
						{/* first */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={{
									width: 12,
									height: 12,
									borderRadius: 10,
									backgroundColor: "rgb(14,190,126)",
								}}
							/>
							<Text style={{ color: "#999", marginHorizontal: 10 }}>
								{item?.rating.positive}%
							</Text>
						</View>

						{/* second */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={{
									width: 12,
									height: 12,
									borderRadius: 10,
									backgroundColor: "rgb(14,190,126)",
								}}
							/>
							<Text style={{ color: "#999", marginHorizontal: 10 }}>
								{item?.rating.stories} Patient Stories
							</Text>
						</View>
					</View>
				</View>
			</View>

			{/* bottom things */}
			<View
				style={{
					flexDirection: "row",
					marginTop: 10,
				}}>
				<View style={{ flex: 1 }}>
					<Text style={{ fontWeight: 600, color: "rgb(14,190,126)" }}>
						Next Available
					</Text>
					<Text style={{ color: "#bbb" }}>12:00 PM tomorrow</Text>
				</View>

				<View style={{ flexDirection: "row", flex: 1 }}>
					<Image
						source={location}
						style={{ width: 24, height: 24, alignSelf: "center" }}
					/>
					<TouchableOpacity
						style={{
							flex: 1,
							backgroundColor: "rgb(14,190,126)",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							marginLeft: 10,
						}}>
						<Text
							style={{
								color: "#ffffff",
								fontSize: 16,
								fontWeight: 500,
							}}>
							Book Now
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default FindCard;

const styles = StyleSheet.create({
	findCard: {
		elevation: 1,
		padding: 20,
		height: 170,
		width: "100%",
		backgroundColor: "#ffffff",
		borderRadius: 10,
		marginVertical: 6,
	},
	findCardContainer: { flexDirection: "row" },
	findCardImage: { width: 80, height: 80, borderRadius: 10 },
});
