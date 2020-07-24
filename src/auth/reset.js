import React, { useEffect, useState } from "react";
import "../css/auth.css";
import { httpReset } from "../services/httpRecovery";
const Reset = (props) => {
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        setToken(props.match.params.token);
    }, []);
    const handler = async (e) => {
        e.preventDefault();
        try {
            if (password) {
                const res = await httpReset(password, token);
                console.log(res);
                if (res.status === 200) {
                    props.history.push("/");
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("wrong");
            } else {
                alert("something went wrong");
            }
        }
    };
    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">لطفا رمز جدید را وارد کنید</h2>
                <form onSubmit={(e) => handler(e)}>
                    <div className="form-group">
                        <label htmlFor="password">رمز جدید:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="********"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Reset;
