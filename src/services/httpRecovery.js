import http from "./httpService";
import config from "../config/proxy.json";

export function httpRecovery(email) {
    return http.post(config.api_recovery, { email });
}

export function httpReset(password, token) {
    return http.post(
        config.api_reset,
        { password },
        {
            params: {
                token,
            },
        }
    );
}
