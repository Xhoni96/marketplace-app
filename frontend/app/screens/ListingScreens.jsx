import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { useQuery } from "react-query";
import { Screen, Card } from "../components";
import colors from "../config/colors";
import /* {jacket, mosh, couch} */ "../assets/icons";
import { LISTING_DETAILS } from "../config/routes";
import apiClient from "../api/client";

// const listings = [
//     {
//         id: 1,
//         title: "Red jacket for sale",
//         price: 100,
//         image: jacket,
//     },
//     {
//         id: 2,
//         title: "Couch in great condition",
//         description: 1000,
//         image: couch,
//     },
//     {
//         id: 3,
//         title: "T3",
//         description: "D3",
//         image: mosh,
//     },
// ];

/* <LottieView autoPlay loop source={require("../assets/animations/loading.json")} speed={2} /> */

export const ListingScreens = ({ navigation }) => (
    // const { data } = useQuery(["lists"], () => apiClient.get("/products").then((response) => response.data));
    // console.log(data, "data listing screen");
    <Screen style={styles.screen}>
        {/* <FlatList
                data={data}
                keyExtractor={(listItem) => listItem.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={`$${item.price}`}
                        image={item.images}
                        onPress={() => navigation.navigate(LISTING_DETAILS, item)}
                    />
                )}
            /> */}
    </Screen>
);

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGrey,
    },
});
