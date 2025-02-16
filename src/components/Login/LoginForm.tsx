import React, { useState } from "react";
import {
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet,
    View,
} from "react-native";
import { CustomInput } from "../utils/CustomInput";
import { loginService } from "../../service/auth";
import { LoginFormType } from "../../types/auth/auth";
import { CustomButton } from "../utils/CustomButton";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 180,
        justifyContent: 'space-around',
    },
})

export const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState <boolean>(false);

    const navigation = useNavigation();

    const login = async () => {
        setLoading(true);
        await loginService({user, password} as LoginFormType).then((response) => {
            setTimeout(() => {
                navigation.navigate('home');
                setLoading(false);
            }, 1000)
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.container}>
                <CustomInput value={user} setValue={setUser} placeholder="User"/>
                <CustomInput isPassword value={password} setValue={setPassword} placeholder="Password"/>
                <CustomButton
                    loading={loading}
                    method={login}
                    label="Login"
                    style={{width: '100%', height: 40, background: '#00D4FF', labelColor: '#fff'}}
                />
            </View>
        </KeyboardAvoidingView>
    )
}