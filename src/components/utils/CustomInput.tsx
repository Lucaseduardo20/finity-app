import {useEffect, useState} from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData } from "react-native";
import { CustomInputProps } from "../../types/customs";

export const CustomInput = ({placeholder, value, setValue}: CustomInputProps) => {
    const [focus, setFocus] = useState(false);

    const blur = () => {
        setFocus(false);
    }

    const styles = StyleSheet.create({
        input: {
            color: '#fff',
            backgroundColor: '#4C4F69',
            opacity: 0.8,
            width: '100%',
            height: 40,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: focus ? '#009DFF' : '',
            boxShadow: focus ? '0 0 10px rgba(0, 157, 255, 0.8)' : '',
            paddingLeft: 10,
            fontFamily: 'Poppins'
        }
    })

    return (
        <TextInput value={value} onChangeText={text => setValue(text)} onBlur={() => blur()} onFocus={() => setFocus(true)} selectionColor={'white'} placeholder={placeholder} style={styles.input} placeholderTextColor={'#B0B3C0'} />
    )
}