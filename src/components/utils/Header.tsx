import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Logo } from "../Logo";
import Entypo from '@expo/vector-icons/Entypo';


export const Header = () => {
    return (
        <View style={styles.container}>
            <Logo width={100} />
            <TouchableOpacity>
                <Entypo name="menu" size={40} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})