import React from "react";
import { StyleSheet, Text } from "react-native";
import { CustomTextProps } from "../../types/customs";

export const CustomText = ({children, style}: CustomTextProps) => {
    return (
        <Text style={{...style, fontFamily: 'Poppins'}}>
            {children}
        </Text>
    )
}