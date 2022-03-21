import { StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation, useQueryClient } from "react-query";
import apiClient from "../api/client";
import { useLocation } from "../hooks/useLocation";
import { AppButton, AppTextInput, ErrorMessage, ImagePickerList, Screen } from "../components";

const schema = z.object({
    title: z.string().min(1, { message: "Title is Required" }),
    price: z.string() /* .positive(), */,
    category: z.string().min(1, { message: "Category is Required" }),
    // images: z.array(z.object()).nonempty({ message: "At least one image is required" }),
    images: z.array(z.string()).nonempty({ message: "At least one image is required" }),
    description: z.string().optional(),
});

export const ListingEditScreen = () => {
    const location = useLocation();
    // const queryClient = useQueryClient();

    const { mutate } = useMutation(
        (data) =>
            apiClient.post("/products", data, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2FueS5lbHRvbkBleGFtcGxlLmNvbSIsIm5hbWUiOiJKb2FueSBFbHRvbiIsImlhdCI6MTY0Nzc5NTEyOX0.kGJ0MvpNBb7-i7c_lo_Dh5mMWRh08idrF7x4gfrP_Us",
                    "Content-Type": "multipart/form-data",
                },
                transformRequest: () =>
                    // !!! override data to return formData since axios converts that to string
                    data,
            }),

        {
            onSuccess: (res) => {
                console.log(res, "res success");
                // queryClient.invalidateQueries("lists");
            },
            onError: (err) => {
                console.log(err, "res err");
            },
        }

        // .then((res) => res.json()),,
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
            description: "",
        },
        // mode: "onChange",
    });
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("description", data.description);
        data.images.forEach((image) => {
            const filename = image.split("/").pop();
            formData.append("images", { uri: image, name: filename, type: "image/jpg" });
        });
        if (location) formData.append("location", JSON.stringify(location));

        mutate(formData);
    };

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
                render={({ field: { onChange, onBlur, value } }) => (
                    <AppTextInput placeholder="Title" onChangeText={onChange} onBlur={onBlur} value={value} autoFocus />
                )}
                name="title"
            />
            <ErrorMessage error={errors.title?.message} visible />

            <Controller
                control={control}
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

            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <AppTextInput
                        placeholder="Descripton"
                        onChangeText={onChange}
                        value={value}
                        // type="number"
                        // keyboardType="numeric"
                    />
                )}
                name="description"
            />

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
