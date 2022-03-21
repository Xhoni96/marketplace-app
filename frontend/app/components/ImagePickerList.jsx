import React, { useRef } from "react";
import { StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerInput } from "./ImagePickerInput";

export const ImagePickerList = ({ images, setImages }) => {
    const scrollView = useRef(null);
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            // setImages((prevImages) => [...prevImages, result.uri]);
            setImages([...images, result.uri]);
        }
    };
    const removeImage = (id) => {
        Alert.alert("Delete", "Are you sure you want to delete this image?", [
            {
                text: "Yes",
                onPress: () => setImages([...images.filter((image) => image !== id)]),
            },
            { text: "No" },
        ]);
    };
    const onSizeChange = () => scrollView.current.scrollToEnd({ animated: true });
    return (
        <ScrollView style={styles.scrollView} ref={scrollView} horizontal onContentSizeChange={onSizeChange}>
            {images.map((image) => (
                <ImagePickerInput key={image} imageUri={image} onPress={removeImage} />
            ))}

            <ImagePickerInput onPress={pickImage} />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 10,
    },
});
