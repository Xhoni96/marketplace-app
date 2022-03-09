import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export const ImagePickerInput = ({ imageUri, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress(imageUri)}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        overflow: "hidden",
        marginRight: 10,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
});
