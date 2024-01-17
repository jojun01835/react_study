import React from "react";
import { NavLink } from "react-router-dom";
import classs from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classs.header}>
      <nav>
        <ul className={classs.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classs.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? classs.active : undefined)}>
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
