import { StyleSheet, Image } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { redLogo } from "../assets/icons";
import { AppTextInput, AppButton, Screen, ErrorMessage } from "../components";

const schema = z.object({
    email: z.string().email().min(1, { message: "Email is Required" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters " }),
});

export const LoginScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors /* dirtyFields */ /* isValid */ },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (/* data */) => null; /* console.log(data) */

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={redLogo} />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <AppTextInput
                        icon="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            <ErrorMessage error={errors.email?.message} visible />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <AppTextInput
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            <ErrorMessage error={errors.password?.message} visible />

            <AppButton /* disabled={!isValid}  */ title="Login" onPress={handleSubmit(onSubmit)} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
        // justifyContent: "space-between",
        // alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
        alignSelf: "center",
    },
});
