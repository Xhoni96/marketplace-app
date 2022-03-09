import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { AppButton } from "../components";
import { redLogo, background } from "../assets/icons";
import { LOGIN, REGISTER } from "../config/routes";

export const WelcomeScreen = ({ navigation }) => (
    <ImageBackground style={styles.background} blurRadius={10} source={background}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={redLogo} />
            <Text style={styles.tagline}>Sell What You Don&apos;t Need</Text>
        </View>
        <AppButton title="Login" color="primary" onPress={() => navigation.navigate(LOGIN)} />
        <AppButton title="Registry" color="secondary" onPress={() => navigation.navigate(REGISTER)} />
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});
