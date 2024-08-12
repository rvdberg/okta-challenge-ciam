import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://okta-challenge-ciam.vercel.app/pizza no-background.png";

  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello there, {user?.given_name || user?.nickname || 'Anonymous'}!</h1>
      {isAuthenticated ? (
        <p className="hero-banner__description">
          Welcome to Pizza 42! <br/>
          You can carry on and order any pizza you like, <br/>
          <strong>as long as it's one of the three we provide!</strong>
        </p>
      ) : (
          <p className="hero-banner__description">
            Welcome to Pizza 42! <br />
            Apologies, but we don't yet serve to customers we don't know.
            But <strong>Don't Panic!</strong> We've made it easy to login or signup.
          </p>
      )}
      {isAuthenticated && !user?.email_verified && (
        <p className="hero-banner__description">
          Since your emailaddress is not verified, you can't order anything yet.
          But <strong>Don't Panic!</strong> and look for our email in your inbox to verify.
        </p>
      )}
    </div>
  );
};
