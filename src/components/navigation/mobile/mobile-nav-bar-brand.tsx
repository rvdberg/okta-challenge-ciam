import React from "react";
import { NavLink } from "react-router-dom";

interface MobileNavBarBrandProps {
  handleClick: () => void;
}

export const MobileNavBarBrand: React.FC<MobileNavBarBrandProps> = ({
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://okta-challenge-ciam.vercel.app/pizza no-background.png"
          alt="Pizza42 logo"
          //width="82"
          height="32"
        />
      </NavLink>
    </div>
  );
};
