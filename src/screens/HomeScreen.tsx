import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Balance } from "../components/Home/Balance";
import { Header } from "../components/utils/Header";


export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Balance />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        width: '100%',
        height: '100%',
        backgroundColor: '#0A0F1E',
        rowGap: 20
    },
})