import React from "react";
import logo from "../images/logo.svg";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <img
                src={logo}
                alt="Логотип сайта Место"
                className="header__logo"
            />
            <div className="header__information">
                <Link to="/signup" className="header__link">
                    Регистрация
                </Link>
            </div>
            <div className="header__information">
                <Link to="/signin" className="header__link">
                    Войти
                </Link>
            </div>
        </header>
    );
}
