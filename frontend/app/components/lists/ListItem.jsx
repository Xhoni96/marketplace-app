import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import { AppText } from "../AppText";

export const ListItem = ({ image, title, subTitle, onPress, IconComponent, renderRightActions }) => (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>

    // <AppText>Hello</AppText>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        fontWeight: "300",
        color: colors.medium,
    },
});
