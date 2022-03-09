import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { AppButton, AppTextInput, ErrorMessage } from "../components";

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    password: z.string().min(4, { message: "Password must be at least 4 characters " }),
});

export const RegistryScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (data) => console.log(data);
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                    <AppTextInput
                        icon="account"
                        placeholder="Name"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name="name"
            />
            <ErrorMessage error={errors.name?.message} visible />

            <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                    <AppTextInput
                        icon="email"
                        placeholder="Email"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name="email"
            />
            <ErrorMessage error={errors.email?.message} visible />

            <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                    <AppTextInput
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name="password"
            />
            <ErrorMessage error={errors.password?.message} visible />

            <AppButton title="Register" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
