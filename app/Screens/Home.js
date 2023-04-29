import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { close, search, location, rightArrow } from "../../assets/icons";
import PopularCard from "../Components/PopularCard";
import { doctors } from "./../data/doctors";
import FeatureCard from "../Components/FeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { handleFavorite } from "../redux/favorite/favoriteSlice";
import { selectCurrentUser } from "../redux/auth/authSlice";

const Home = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
	const user = useSelector(selectCurrentUser);

	const dispatch = useDispatch();

	const handleLike = (id) => {
		dispatch(handleFavorite({ id }));
	};
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.topDiv}>
				<View style={styles.topDivContainer}>
					<Text style={styles.greetText}>
						Hi {user?.name ? user?.name : "User"}
					</Text>
					{/* Find Doctor  */}
					<View style={styles.findDoctor}>
						<Text style={styles.findDoctorText}>Find Doctor</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate("MapsView")}>
							<Image source={location} style={styles.locationIcon} />
						</TouchableOpacity>
					</View>
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
			</View>

			<SafeAreaView style={styles.contentView}>
				<View style={styles.contentViewTextContainer}>
					<Text style={styles.contentViewText}>Popular Doctor</Text>
					<TouchableOpacity style={styles.viewMore}>
						<Text style={styles.viewMoreText}>See all</Text>
						<Image source={rightArrow} style={styles.viewMoreIcon} />
					</TouchableOpacity>
				</View>

				<View>
					<FlatList
						data={doctors}
						horizontal
						maxToRenderPerBatch={3}
						scrollEnabled={true}
						key={(i) => i?.id}
						keyExtractor={(i) => i?.id}
						renderItem={(gotItem) => PopularCard({ gotItem, navigation })}
						showsHorizontalScrollIndicator={false}
					/>
				</View>

				<View style={styles.contentViewFeatureContainer}>
					<Text style={styles.contentViewText}>Feature Doctor</Text>
					<TouchableOpacity style={styles.viewMore}>
						<Text style={styles.viewMoreText}>See all</Text>
						<Image source={rightArrow} style={styles.viewMoreIcon} />
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
							FeatureCard({ gotItem, navigation, handleLike })
						}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</SafeAreaView>
			<StatusBar style="light" />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	topDiv: {
		backgroundColor: "rgb(14,190,126)",
		height: 180,
		borderBottomRightRadius: 30,
		borderBottomLeftRadius: 30,
	},
	topDivContainer: {
		flex: 1,
		top: 45,
		paddingHorizontal: 30,
		gap: 15,
	},
	greetText: { fontSize: 15, color: "#ffffff" },
	findDoctor: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	findDoctorText: {
		fontSize: 24,
		fontWeight: 800,
		color: "#ffffff",
		letterSpacing: 1,
	},
	locationIcon: {
		width: 25,
		height: 25,
	},
	searchField: {
		backgroundColor: "#ffffff",
		bottom: -15,
		flexDirection: "row",
		marginHorizontal: 15,
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
	contentView: { flex: 1 },
	contentViewTextContainer: {
		flexDirection: "row",
		paddingHorizontal: 10,
		justifyContent: "space-between",
	},
	contentViewText: { fontSize: 20, fontWeight: 600 },
	viewMore: {
		flexDirection: "row",
		right: 30,
		alignItems: "center",
	},
	viewMoreText: { fontSize: 13, color: "#aaaaaa" },
	viewMoreIcon: { width: 11, height: 11 },
	contentViewFeatureContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 15,
		marginVertical: 15,
	},

	featureCards: { marginLeft: 15 },
	popularSection: {},
});
