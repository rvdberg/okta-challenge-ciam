import React, { useEffect, useState } from "react";
import { Auth0Features } from "src/components/auth0-features";
import { HeroBanner } from "src/components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { PizzaItems } from "src/components/pizza-items";
import { getPizzas } from "src/services/order.service";
import { Pizza } from "src/models/pizza";

export const HomePage: React.FC = () => {
const [pizzas, setPizzas] = useState<Pizza[]>([]);

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
      <HeroBanner />
      <PizzaItems pizzaList={pizzas}/>
    </>
  </PageLayout>
)};
