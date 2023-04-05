import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { close, leftArrow, search } from "../../assets/icons";
import FindCard from "../Components/FindCard";
import { doctors } from "./../data/doctors";

const FindDoctor = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
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
						<Text style={{ ...styles.headerText }}>Find Doctors</Text>
					</View>

					{/* Search Field */}
					<View style={styles.searchField}>
						<Image source={search} style={styles.searchIcon} />
						<TextInput
							value={searchText}
							placeholder="Search"
							onChangeText={(t) => setSearchText(t)}
							style={styles.searchInput}
						/>
						<TouchableOpacity onPress={() => setSearchText("")}>
							<Image
								source={close}
								style={{
									display: searchText.length > 0 ? "flex" : "none",
									width: 17,
									height: 17,
								}}
							/>
						</TouchableOpacity>
					</View>

					{/* <FindCard /> */}
					<FlatList
						data={doctors}
						keyExtractor={(i) => i.id}
						renderItem={(item) => FindCard(item)}
					/>
				</SafeAreaView>
			</LinearGradient>
			<StatusBar style="light" />
		</View>
	);
};

export default FindDoctor;

const styles = StyleSheet.create({
	fullFlex: { flex: 1 },
	header: { flexDirection: "row", gap: 30, marginTop: 10 },
	headerText: { fontSize: 18, textAlignVertical: "center", fontWeight: 600 },
	headerIconView: {
		padding: 8,
		backgroundColor: "white",
		borderRadius: 10,
	},
	headerIcon: { width: 15, height: 15, tintColor: "#000000" },

	searchField: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		borderRadius: 10,
		alignItems: "center",
		paddingHorizontal: 15,
		elevation: 2,
		marginTop: 25,
		marginBottom: 15,
	},
	searchIcon: { width: 20, height: 20 },
	searchInput: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		fontSize: 16,
		flex: 1,
	},
});
