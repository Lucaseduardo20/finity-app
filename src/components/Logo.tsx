import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LogoPropsType } from "../types/global";

export const Logo = ({width, height}: LogoPropsType) => {
    const styles = StyleSheet.create({
        container: {
            width: 'auto',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            width: width ??= 150,
            height: height ??= 150,
            resizeMode: 'contain',
        },
    })

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
        </View>
    )
}