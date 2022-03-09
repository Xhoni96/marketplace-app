/* eslint-disable global-require */
import React, { useState } from "react";
import { FlatList } from "react-native";

import { ListItem, Screen, ListItemSeperator, ListItemDeleteAction } from "../components";
import { mosh } from "../assets/icons";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "Yo man whats'upp",
        image: mosh,
    },
    {
        id: 2,
        title: "T2",
        description: "Hey how much for this one",
        image: mosh,
    },
    {
        id: 3,
        title: "T3",
        description: "Hey do you also pay for the shipping fee ?",
        image: mosh,
    },
];

export const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [isRefreshing] = useState(false);

    const handleDelete = (message) => {
        // delete message
        setMessages(messages.filter((m) => m.id !== message.id));
    };
    return (
        <Screen>
            <FlatList
                ItemSeparatorComponent={ListItemSeperator}
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("item list clicked")}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                refreshing={isRefreshing}
                onRefresh={() => {
                    // invalidate react query when connected with backend
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: mosh,
                        },
                    ]);
                }}
            />
        </Screen>
    );
};

// const styles = StyleSheet.create({

// });
