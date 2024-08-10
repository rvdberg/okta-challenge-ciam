import { AppError } from "./app-error";
import { Message } from "./message";
import { Pizza } from "./pizza";

export interface ApiResponse {
  data: Pizza[] | null;
  error: AppError | null;
}
