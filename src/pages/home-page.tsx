import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { PizzaItems } from "src/components/pizza-items";
import { OrderHistory } from "../components/order-history";
import { getPizzas } from "src/services/order.service";
import { Pizza } from "src/models/pizza";
import { Order } from "src/models/order";

export const HomePage: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

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
        <OrderHistory orderHistory={orderHistory}/>
      </>
    </PageLayout>
  )};
