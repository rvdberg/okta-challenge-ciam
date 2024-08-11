import React from "react";
import { PizzaItem } from "./pizza-item";
import { Pizza } from '../models/pizza'
import { useAuth0 } from "@auth0/auth0-react";
import { createOrders } from "src/services/order.service";

interface PizzaItemsProps {
  pizzaList: Pizza[]
  setOrderHistory: any
}

export const PizzaItems: React.FC<PizzaItemsProps> = ({pizzaList, setOrderHistory}) => {

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Pizza42's famous Pizza's!</h2>
      <div className="auth0-features__grid">
        {pizzaList.map((pizza) => (
          <PizzaItem key={pizza.id}
            pizza={pizza}
            setOrderHistory={setOrderHistory}
          />
        ))}
      </div>
    </div>
  );
};
