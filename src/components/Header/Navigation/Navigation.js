import React from 'react';
import './Navigation.css';
import {PAGES_URL} from "../../../constants";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                <li className="Nav__list-item">
                    <NavLink
                        to="/"
                        exact
                        className="Nav__list-link"
                    >
                        Home
                    </NavLink>
                </li>
                {PAGES_URL.map(item => (
                    <li
                        key={item.id}
                        className="Nav__list-item"
                    >
                        <NavLink
                            to={`/pages/${item.id}`}
                            exact
                            className="Nav__list-link"
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;