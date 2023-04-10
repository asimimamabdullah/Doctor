import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { close, leftArrow, rightArrow, search } from "../../assets/icons";
import FeatureCard from "../Components/FeatureCard";
import { doctors } from "../data/doctors";
import FavoriteCard from "../Components/FavoriteCard";
import { StatusBar } from "expo-status-bar";

const Favorites = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
	return (
		<View style={{ ...styles.fullFlex }}>
			<LinearGradient
				// Background Linear Gradient
				colors={["#B9E8DE", "#EAEAEA", "#EAEAEA", "#BEE2B1"]}
				start={{ x: -0.8, y: 0.1 }}
				end={{ x: 0.7, y: 1.3 }}
				style={{ ...styles.fullFlex }}>
				<SafeAreaView
					style={{
						...styles.fullFlex,
						paddingHorizontal: 20,
						marginVertical: 10,
					}}>
					<ScrollView>
						{/* header */}
						<View style={styles.header}>
							<TouchableOpacity
								hitSlop={10}
								style={styles.headerIconView}>
								<Image source={leftArrow} style={styles.headerIcon} />
							</TouchableOpacity>
							<Text style={{ ...styles.headerText }}>
								Favourite Doctors
							</Text>
						</View>

						{/* Search Field */}
						<View style={styles.searchField}>
							<Image source={search} style={styles.searchIcon} />
							<TextInput
								value={searchText}
								placeholder="Search"
								onChangeText={(t) => setSearchText(t)}
								style={styles.searchInput}
								onSubmitEditing={() => navigation.navigate("Find")}
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
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								marginVertical: 20,
								justifyContent: "space-between",
							}}>
							{doctors?.map((val, index) => (
								<FavoriteCard
									gotItem={{ item: val }}
									navigation={navigation}
								/>
							))}
						</View>

						<View style={styles.contentViewFeatureContainer}>
							<Text style={styles.contentViewText}>Feature Doctor</Text>
							<TouchableOpacity style={styles.viewMore}>
								<Text style={styles.viewMoreText}>See all</Text>
								<Image
									source={rightArrow}
									style={styles.viewMoreIcon}
								/>
							</TouchableOpacity>
						</View>

						{/* <FeatureCard /> */}

						<View style={styles.featureCards}>
							<FlatList
								data={doctors}
								horizontal
								maxToRenderPerBatch={3}
								scrollEnabled={true}
								keyExtractor={(i) => i?.id}
								renderItem={(gotItem) =>
									FeatureCard({ gotItem, navigation })
								}
								showsHorizontalScrollIndicator={false}
							/>
						</View>
					</ScrollView>
				</SafeAreaView>
				<StatusBar style="light" />
			</LinearGradient>
		</View>
	);
};

export default Favorites;

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

	searchField: {
		backgroundColor: "#ffffff",
		marginTop: 25,
		flexDirection: "row",
		borderRadius: 10,
		alignItems: "center",
		paddingHorizontal: 15,
		elevation: 2,
	},
	searchIcon: { width: 20, height: 20 },
	searchInput: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		fontSize: 16,
		flex: 1,
	},

	contentViewFeatureContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		// marginLeft: 15,
		marginVertical: 15,
	},

	contentViewText: { fontSize: 20, fontWeight: 600 },
	viewMore: {
		flexDirection: "row",
		right: 30,
		alignItems: "center",
	},
	viewMoreText: { fontSize: 13, color: "#aaaaaa" },
	viewMoreIcon: { width: 11, height: 11 },

	// featureCards: { marginLeft: 15 },
});
