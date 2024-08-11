import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { PizzaItems } from "src/components/pizza-items";
import { OrderHistory } from "../components/order-history";
import { getPizzas } from "src/services/order.service";
import { Pizza } from "src/models/pizza";
import { Order } from "src/models/order";
import { useAuth0 } from "@auth0/auth0-react";

export const HomePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [orderHistory, setOrderHistory] = useState<Order[]>(user?.custom_data.orderHistory || []);

  useEffect(() => {
    let isMounted = true;

    const getPizza = async () => {
      const { data, error } = await getPizzas();

      if (!isMounted) {
        return;
      }

      if (data) {
        setPizzas(data);
      }

      if (error) {
        setPizzas([]);
      }
    };

    getPizza();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <PageLayout>
      <>
        <PizzaItems pizzaList={pizzas} setOrderHistory={setOrderHistory}/>
        {isAuthenticated && (
            <OrderHistory orderHistory={orderHistory} />
        )}
      </>
    </PageLayout>
  )};
