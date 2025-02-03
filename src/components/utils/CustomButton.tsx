import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { CustomText } from "./CustomText";
import { CustomButtonType } from "../../types/customs";

export const CustomButton = (props: CustomButtonType) => {

    const styles = StyleSheet.create({
        container: {
            width: props.style.width,
            height: props.style.height,
            backgroundColor: props.style.background,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    return (
        <TouchableOpacity onPress={props.method} style={styles.container}>
            <CustomText style={{color: 'white', fontSize: 20, fontWeight: 600}}>{props.label}</CustomText>
        </TouchableOpacity>
    )
}