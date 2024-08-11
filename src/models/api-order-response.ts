import { AppError } from "./app-error";
import { Order } from "./order";

export interface ApiOrderResponse {
  data: Order[] | null;
  error: AppError | null;
}
