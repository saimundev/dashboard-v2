import { ColumnDef } from "@tanstack/react-table";
import { UserData } from "./user.types";
import { Checkbox } from "../ui/checkbox";
import TableHeader from "../shared/TableHeader";
import { toast } from "sonner";
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
import moment from "moment";

const UserColumns: ColumnDef<UserData>[] = [
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
  },
  {
    accessorKey: "email",
    header: () => <TableHeader name="email" />,
  },
  {
    accessorKey: "createdAt",
    header: () => <TableHeader name="createdat" />,
    cell: ({ row }) => moment(row.original.createdAt, "YYYYMMDD").fromNow(),
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

export default UserColumns;
