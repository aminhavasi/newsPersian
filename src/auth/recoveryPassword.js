import React from "react";
import "../css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { recovery as recoveryAction } from "../utils/actions/authAction";
const RecoveryPassword = (props) => {
    const dispatch = useDispatch();
    const recovery = useSelector((state) => state.recoveryPassword);
    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">بازیابی رمز عبور</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">ایمیل:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Example@info.com"
                            name="email"
                            value={recovery}
                            onChange={(e) =>
                                dispatch(recoveryAction(e.target.value))
                            }
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

export default RecoveryPassword;
