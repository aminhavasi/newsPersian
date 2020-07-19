import React from "react";
const Navbar = () => {
    return (
        <nav
            className=" navbar-expand-md navbar navbar-dark bg-danger 
    "
        >
            <a class="navbar-brand" href="#">
                خبرگزاری
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            صفحه اصلی
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            سیاسی
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            ورزشی
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            اجتماعی
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
