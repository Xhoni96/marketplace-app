import { StyleSheet } from "react-native";
import React from "react";
import { AppText } from "./AppText";

export const ErrorMessage = ({ error, visible }) =>
    error && visible ? <AppText style={styles.error}>{error}</AppText> : null;

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontWeight: "500",
    },
});
