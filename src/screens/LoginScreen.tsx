import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LoginForm } from "../components/Login/LoginForm";
import { Logo } from "../components/Logo";


export const LoginScreen = () => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#0A0F1E',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 50,
        },
    })

    return (
        <View style={styles.container}>
            <Logo />
            <LoginForm />
        </View>
    )
}