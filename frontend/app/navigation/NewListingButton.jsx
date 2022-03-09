import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "../components";
import colors from "../config/colors";

const NewListingButton = () => (
    <View style={styles.container}>
        <Icon backgroundColor="transparent" name="plus-circle" size={95} iconColor={colors.white} />
    </View>
);
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        top: -5,
    },
});

export default NewListingButton;
