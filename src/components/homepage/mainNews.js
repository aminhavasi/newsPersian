import React from "react";
const MainNews = () => {
    return (
        <div className="row col-12 mx-auto mainNews">
            <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12  ">
                <img
                    className="img-fluid"
                    src={require("./../../resource/main.JPG")}
                    alt="main news"
                />
                <a href="/" className="lead">
                    salam
                </a>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 ">
                <ul className="">
                    <li className="bg-light shadow">
                        <a href="/">news1</a>
                    </li>
                    <li className="bg-light shadow">
                        <a href="/">news1</a>
                    </li>{" "}
                    <li className="bg-light shadow">
                        <a href="/">news1</a>
                    </li>{" "}
                    <li className="bg-light shadow">
                        <a href="/">news1</a>
                    </li>{" "}
                    <li className="bg-light shadow">
                        <a href="/">news1</a>
                    </li>
                </ul>
            </div>
            <div
                className="col-lg-4 col-sm-12 col-xs-12 col-md-12 bg-danger flex d-flex"
                style={{ justifyContent: "end" }}
            >
                connnect
            </div>
        </div>
    );
};

export default MainNews;
