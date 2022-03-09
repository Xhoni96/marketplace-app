import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export const AppTextInput = ({ icon, placeholder, style, ...rest }) => (
    <View style={[styles.container, style]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />}
        <TextInput style={defaultStyles.text} placeholder={placeholder} {...rest} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
});
