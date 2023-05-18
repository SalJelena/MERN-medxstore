import {LS_TOKEN, LS_USER} from "../config/configVars";

export class AuthUtils {
    static isLogged = () => localStorage.hasOwnProperty(LS_TOKEN)
}