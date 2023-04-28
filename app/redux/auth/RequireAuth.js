import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RequireAuth = ({ children, navigation }) => {
	const token = useSelector(selectCurrentToken);
	// const location = useLocation()

	return token ? children : navigation.navigate("Tabs");
};

export default RequireAuth;

const styles = StyleSheet.create({});
