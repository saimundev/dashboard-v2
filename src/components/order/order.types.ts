export interface OrderData {
  name: string;
  price: number;
  quantities: number;
  image: string;
  received: true;
  status: "pending" | "processing" | "deliver";
  email: string;
  createdOrder: Date;
}
