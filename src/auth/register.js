import React from "react";
import "../css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../utils/actions/authAction";
import { register as httpRegister } from "../services/httpRegister";
const Register = (props) => {
    const dispath = useDispatch();
    const registerState = useSelector((state) => state.register);

    const handlerRegister = async (e) => {
        e.preventDefault();
        try {
            const username = registerState.username;
            const email = registerState.email;
            const password = registerState.password;
            if (email && username && password) {
                const res = await httpRegister(username, email, password);
                if (res.status === 200) {
                    localStorage.setItem("token", res.headers["x-auth"]);
                    props.history.replace("/");
                }
            }
        } catch (err) {
            if (err.response && err.response === 400) {
                alert("please singup with another email");
            }
        }
    };

    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">ثبت نام در سایت </h2>
                <form onSubmit={(e) => handlerRegister(e)}>
                    <div className="form-group">
                        <label htmlFor="username">نام کاربری:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="نام کاربری خود را وارد کنید"
                            name="username"
                            value={
                                registerState.username
                                    ? registerState.username
                                    : ""
                            }
                            onChange={(e) =>
                                dispath(register(e.target.value, "username"))
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">ایمیل:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Example@info.com"
                            name="email"
                            value={
                                registerState.email ? registerState.email : ""
                            }
                            onChange={(e) =>
                                dispath(register(e.target.value, "email"))
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
                                registerState.password
                                    ? registerState.password
                                    : ""
                            }
                            onChange={(e) =>
                                dispath(register(e.target.value, "password"))
                            }
                        />
                    </div>

                    <br />

                    <button type="submit" className="btn btn-primary mt-2">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
