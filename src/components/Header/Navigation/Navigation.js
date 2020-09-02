import React from 'react';
import './Navigation.css';
import {PAGES_URL} from "../../../constants";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                {PAGES_URL.map(item => (
                    <li
                        key={item.id}
                        className="Nav__list-item"
                    >
                        <NavLink
                            to={item.id === 'home' ? '/' : `/pages/${item.id}`}
                            exact
                            className="Nav__list-link"
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                <li className="Nav__list-item">
                    <NavLink
                        to="/pages/admin"
                        className="Nav__list-link"
                    >
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;