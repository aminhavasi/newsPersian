import React from "react";
const Navbar = () => {
    return (
        <nav
            className=" navbar-expand-md navbar navbar-dark bg-danger 
    "
        >
            <a className="navbar-brand" href="/">
                خبرگزاری
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            صفحه اصلی
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            سیاسی
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            ورزشی
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            اجتماعی
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
