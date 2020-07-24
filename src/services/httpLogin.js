import http from "./httpService";
import config from "../config/proxy.json";

export function login(email, password) {
    return http.post(config.api_login, { email, password });
}
