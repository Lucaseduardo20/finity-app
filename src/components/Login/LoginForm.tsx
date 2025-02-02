import React from "react";
import { Image, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { CustomInput } from "../utils/CustomInput";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        justifyContent: 'space-around',
    }
})

export const LoginForm = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.container}>
                <CustomInput placeholder="User"/>
                <CustomInput placeholder="Password"/>
            </View>
        </KeyboardAvoidingView>
    )
}