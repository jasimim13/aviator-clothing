import React from "react";
import { Outlet, Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import "../Navigation/navigation.styles.scss";

export const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Icon className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
