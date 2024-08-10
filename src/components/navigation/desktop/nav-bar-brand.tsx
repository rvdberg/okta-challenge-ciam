import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://okta-challenge-ciam.vercel.app/pizza no-background.png"
          alt="Pizza42 logo"
          //width="70"
          height="36"
        />
      </NavLink>
    </div>
  );
};
