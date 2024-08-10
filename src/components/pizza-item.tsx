import React from "react";

interface PizzaItemProps {
  id: string,
  name: string,
  description?: string,
  price: string
}

export const PizzaItem: React.FC<PizzaItemProps> = ({
  id,
  name,
  description,
  price,
}) => (
  <div className="auth0-feature">
    <h3 className="auth0-feature__headline">
      {id}
      {name}
    </h3>
    <p className="auth0-feature__description">{description}</p>
    <p className="auth0-feature__description">{price}</p>
  </div>
);
