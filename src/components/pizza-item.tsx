import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Pizza } from "src/models/pizza";
import { createOrders } from "src/services/order.service";

interface PizzaItemProps {
  pizza: Pizza
  setOrderHistory: any
}

export const PizzaItem: React.FC<PizzaItemProps> = ({pizza, setOrderHistory}) => {

  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  const handleOrder = async () => {

    const accessToken = await getAccessTokenSilently();
    const response = await createOrders(accessToken, pizza);
    setOrderHistory(response.data?.orderHistory);
  };

  return (
  <div className="auth0-feature">
      <button className="button__order" disabled={!isAuthenticated || !user?.email_verified} onClick={handleOrder}>
      Order
    </button>
    <br />
    <h2 className="auth0-feature__headline">
      {pizza.name}
    </h2>
    <p className="auth0-feature__description">{pizza.description}</p>
    <br />
    <h3 className="auth0-feature__description">{pizza.price}</h3>
  </div>
  );
};
