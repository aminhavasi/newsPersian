import React from "react";
import "../css/auth.css";
const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">ثبت نام در سایت </h2>
                <form>
                    <div className="form-group">
                        <label for="username">نام کاربری:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="نام کاربری خود را وارد کنید"
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">ایمیل:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Example@info.com"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label for="pwd">رمز عبور:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="********"
                            name="pswd"
                        />
                    </div>
                    <a href="/">رمز خود را فراموش کرده اید؟</a>
                    <br />

                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
