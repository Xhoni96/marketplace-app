import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Icon = ({ backgroundColor = "#000", size = 40, iconColor = "#fff", name }) => (
    <View
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
);
