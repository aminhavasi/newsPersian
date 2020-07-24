import React from "react";
import "../css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { recovery as recoveryAction } from "../utils/actions/authAction";
import { httpRecovery } from "./../services/httpRecovery";
const RecoveryPassword = (props) => {
    const dispatch = useDispatch();
    const recovery = useSelector((state) => state.recoveryPassword);
    const handler = async (e) => {
        e.preventDefault();
        try {
            if (recovery) {
                const res = await httpRecovery(recovery);
                if (res.status === 200) {
                    props.history.push("/reset");
                }
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
                alert("email not exict");
            } else {
                alert("something went wrong");
            }
        }
    };
    return (
        <div className="register">
            <div className="container">
                <h2 className="text-center">بازیابی رمز عبور</h2>
                <form onSubmit={(e) => handler(e)}>
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
