import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { leftArrow } from "../../assets/icons";

const ConfirmAppointment = ({ navigation }) => {
	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.1 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<SafeAreaView style={{ ...styles.fullFlex, paddingHorizontal: 20 }}>
					{/* header */}
					<View style={styles.header}>
						<TouchableOpacity
							style={styles.headerIconView}
							onPress={() => navigation.goBack()}>
							<Image source={leftArrow} style={styles.headerIcon} />
						</TouchableOpacity>
						<Text style={{ ...styles.headerText }}>Appointment</Text>
					</View>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

export default ConfirmAppointment;

const styles = StyleSheet.create({
	fullFlex: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		gap: 30,
		marginTop: 10,
		alignItems: "center",
	},
	headerText: { fontSize: 20, fontWeight: 600 },
	headerIconView: {
		padding: 8,
		backgroundColor: "white",
		borderRadius: 10,
	},
	headerIcon: { width: 15, height: 15, tintColor: "#000000" },
});
