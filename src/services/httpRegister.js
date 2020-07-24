import http from "./httpService";
import config from "../config/proxy.json";

export function register(username, email, password) {
    return http.post(config.api_register, { username, email, password });
}
