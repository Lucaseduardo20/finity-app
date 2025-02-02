import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LogoPropsType } from "../types/global";

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
})



export const Logo = ({width, height}: LogoPropsType) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
        </View>
    )
}