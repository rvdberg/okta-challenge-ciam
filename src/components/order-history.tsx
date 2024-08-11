import React from "react";
import { Order } from "../models/order"
import { CodeSnippet } from "../components/code-snippet";

interface OrderHistoryProps {
  orderHistory: Order[]
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({
  orderHistory,
}) => (
  <CodeSnippet title="OrderHistory" code={JSON.stringify(orderHistory, null, 2)}/>
);