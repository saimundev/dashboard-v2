"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import DataTable from "@/components/shared/DataTable";
import { ChangeEvent, useState } from "react";
import { OrderData } from "@/components/order/order.types";
import columns from "@/components/order/OrderColumns";
import ConfirmModal from "@/components/shared/ConfirmModal";

const data: OrderData[] = [
  {
    name: "t-shart",
    price: 150,
    quantities: 2,
    image: "image",
    email: "saimun@gmail.com",
    received: true,
    status: "pending",
    createdOrder: new Date("2024-05-12T00:00:00.000Z"),
  },
];

const OrderPage = () => {
  const [open, setOpen] = useState(false);
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleConfirm = () => {};

  return (
    <div className="">
      <h1 className="text_primary mb-4 ">Orders</h1>
      <div className=" mt-4">
        <DataTable
          data={data}
          columns={columns}
          searchText="Search by name"
          onSearch={search}
        />
      </div>
      <button onClick={() => setOpen(true)}>CLick</button>
      <ConfirmModal
        open={open}
        onClose={setOpen}
        handleConfirm={handleConfirm}
        type="slide"
      />
    </div>
  );
};

export default OrderPage;
