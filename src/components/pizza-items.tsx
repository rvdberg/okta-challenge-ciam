import React from "react";
import { PizzaItem } from "./pizza-item";
import { Pizza } from '../models/pizza'

interface PizzaItemsProps {
  pizzaList: Pizza[]
}

export const PizzaItems: React.FC<PizzaItemsProps> = ({pizzaList}) => {

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Pizza42's famous Pizza's!</h2>
      <div className="auth0-features__grid">
        {pizzaList.map((pizza) => (
          <PizzaItem
            id={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
};
