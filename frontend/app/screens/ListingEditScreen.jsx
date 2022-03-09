import { StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useMutation } from "react-query";
// import { useLocation } from "../hooks/useLocation";
import { AppButton, AppTextInput, ErrorMessage, ImagePickerList, Screen } from "../components";

const schema = z.object({
    title: z.string().min(1, { message: "Title is Required" }),
    price: z.string() /* .positive(), */,
    category: z.string().min(1, { message: "Category is Required" }),
    images: z.array(z.string()).nonempty({ message: "At least one image is required" }),
});

export const ListingEditScreen = () => {
    // const location = useLocation();
    const { mutate } = useMutation(
        (data) =>
            fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: new Headers({
                    Authorization:
                        "Bearer " +
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2FueS5lbHRvbkBleGFtcGxlLmNvbSIsIm5hbWUiOiJKb2FueSBFbHRvbiIsImlhdCI6MTY0Njc3OTY3NX0.esYrZ8hj9ISPH4h3hxUA4ONkceKyEWc8_NeON5KSgtM",
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(data),
            }).then((res) => res.json()),
        {
            onSuccess: (res) => {
                console.log(res, "res success");
            },
        }
    );
    // console.log(location, "location");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            title: "",
            price: "",
            category: "",
            images: [],
        },
        // mode: "onChange",
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    // console.log(location, "location");

    return (
        <Screen style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => <ImagePickerList images={value} setImages={onChange} />}
                name="images"
            />
            <ErrorMessage error={errors.images?.message} visible />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <AppTextInput placeholder="Title" onChangeText={onChange} onBlur={onBlur} value={value} autoFocus />
                )}
                name="title"
            />
            <ErrorMessage error={errors.title?.message} visible />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <AppTextInput
                        style={styles.price}
                        placeholder="Price"
                        onChangeText={onChange}
                        value={value}
                        // type="number"
                        // keyboardType="numeric"
                    />
                )}
                name="price"
            />
            <ErrorMessage error={errors.price?.message} visible />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Picker
                        // itemStyle={{ color: "red" }}
                        // enabled={false}
                        // numberOfLines={3}
                        // label="JavaScript"
                        // mode="dialog"
                        // prompt="Pick one, just one"
                        selectedValue={value}
                        onValueChange={onChange}
                        // onValueChange={(itemValue) => onChange(itemValue)}
                    >
                        <Picker.Item label="Category" value="category" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                )}
                name="category"
            />
            <ErrorMessage error={errors.category?.message} visible />

            <AppTextInput placeholder="Descripton" />

            <AppButton title="POST" onPress={handleSubmit(onSubmit)} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    price: {
        width: "35%",
    },
});
