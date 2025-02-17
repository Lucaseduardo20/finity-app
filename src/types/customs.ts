import { ColorValue, DimensionValue, TextStyle } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type CustomInputProps = {
    placeholder?: string,
    value: string,
    isPassword?: boolean,
    setValue: (text: string) => void
}

export type CustomTextProps = {
    children: string,
    style?: TextStyle
}

export type CustomButtonType = {
    style: {
        width: DimensionValue,
        height: DimensionValue
        background: ColorValue,
        labelColor: ColorValue,
    },
    label: string,
    method: () => any,
    loading?: boolean
}

type RootStackParamList = {
    login: undefined,
    home: undefined
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>