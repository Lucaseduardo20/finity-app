import { ColorValue, DimensionValue, TextStyle } from "react-native"

export type CustomInputProps = {
    placeholder?: string,
    value: string,
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
    method: () => any
}