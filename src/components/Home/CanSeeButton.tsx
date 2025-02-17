import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export const CanSeeButton = ({state, setState}: {state: boolean, setState: (state: boolean) => void}) => {
    return (
        <TouchableOpacity onPress={() => setState(!state)}>
            {!state ? (
                <View style={styles.button}>
                    <Feather name="eye" size={24} color="#fff" />
                    <Text style={{color: '#fff'}}>Mostrar</Text>
                </View>
            ) : (
                <View style={styles.button}>
                    <Feather name="eye-off" size={24} color="#fff" />
                    <Text style={{color: '#fff'}}>Ocultar</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#009DFF',
        paddingHorizontal: 4,
        alignItems: 'center',
        columnGap: 8,
    }
})