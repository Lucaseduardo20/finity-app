import { api, setAuthToken } from "./api";
import { LoginFormType } from "../types/auth/auth";

export const loginService = async (data: LoginFormType) => {
    return await api.post('/login', data).then((response) => {
        setAuthToken(response.data.token);
        return response.data
    }).catch((err) => {
        return err.message
    })
}