import { AppError } from "./app-error";
import { Order } from "./order";

export interface ApiOrderResponse {
  data: { orderHistory: Order[] } | null;
  error: AppError | null;
}
