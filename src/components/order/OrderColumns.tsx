"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderData } from "./order.types";
import TableHeader from "../shared/TableHeader";
import moment from "moment";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";

const columns: ColumnDef<OrderData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <TableHeader name="name" />,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "quantities",
    header: () => <TableHeader name="quantities" />,
  },
  {
    accessorKey: "price",
    header: () => <TableHeader name="price" />,
  },
  {
    accessorKey: "image",
    header: () => <TableHeader name="image" />,
  },
  {
    accessorKey: "email",
    header: () => <TableHeader name="email" />,
  },
  {
    accessorKey: "createdOrder",
    header: () => <TableHeader name="created order" />,
    cell: ({ row }) => moment(row.original.createdOrder, "YYYYMMDD").fromNow(),
  },
  {
    accessorKey: "received",
    header: () => <TableHeader name="received" />,
  },
  {
    accessorKey: "status",
    header: () => <TableHeader name="status" />,
  },
  {
    accessorKey: "action",
    header: () => <TableHeader name="action" />,
    cell: ({ row }) => {
      const payment = row.original;

      const handleCopyPayment = () => {
        navigator.clipboard.writeText(payment.name);
        toast("Copy payment ID", {
          action: {
            label: "Close",
            onClick: () => console.log("Undo"),
          },
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleCopyPayment}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableHiding: false,
  },
];

export default columns;
