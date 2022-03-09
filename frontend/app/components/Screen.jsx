import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform, View } from "react-native";

export const Screen = ({ children, style }) => (
    <SafeAreaView style={styles.screen}>
        <View style={style}>{children}</View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
    },
});
