import React from "react";
import "../css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/actions/authAction";
import { login as httpLogin } from "../services/httpLogin";
const Login = (props) => {
    const dispath = useDispatch();
    const loginState = useSelector((state) => state.login);
    const handlerLogin = async (e) => {
        e.preventDefault();
        try {
            const email = loginState.email;
            const password = loginState.password;
            if (email && password) {
                const res = await httpLogin(email, password);
                if (res.status === 200) {
                    await localStorage.setItem("token", res.headers["x-auth"]);
                    props.history.replace("/admin");
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("email or password is wrong");
            } else {
                alert("something went wrong");
            }
        }
    };
    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">صفحه ورود به سایت</h2>
                <form onSubmit={(e) => handlerLogin(e)}>
                    <div className="form-group">
                        <label htmlFor="email">ایمیل:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Example@info.com"
                            name="email"
                            value={loginState.email ? loginState.email : ""}
                            onChange={(e) =>
                                dispath(login(e.target.value, "email"))
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">رمز عبور:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="********"
                            name="pswd"
                            value={
                                loginState.password ? loginState.password : ""
                            }
                            onChange={(e) =>
                                dispath(login(e.target.value, "password"))
                            }
                        />
                    </div>
                    <a href="/recovery">رمز خود را فراموش کرده اید؟</a>
                    <br />

                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
