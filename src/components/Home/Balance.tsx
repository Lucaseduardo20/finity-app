import {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { CanSeeButton } from "./CanSeeButton";

export const Balance = () => {
    const [balance, setBalance] = useState<number>(1200);
    const [canSee, setCanSee] = useState<boolean>(true);


    return (
        <View style={styles.container}>
            <Text style={styles.balance}>Saldo Atual: {canSee ? balance : '••••••'}</Text>
            <CanSeeButton state={canSee} setState={setCanSee} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    balance: {
        fontSize: 24,
        fontFamily: 'Poppins',
        color: '#fff',
        fontWeight: 600
    }
})