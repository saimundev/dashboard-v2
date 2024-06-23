"use client";

import PlusIcon from "@/components/icons/PlusIcon";
import RolesColumns from "@/components/roles/RolesColumns";
import { IRolesData } from "@/components/roles/roles.types";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const data: IRolesData[] = [
  {
    name: "Phone",
    email: "saimun@gmail.com",
  },
];

const RolePage = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between ">
        <h2 className="text_primary mb-0">User Role</h2>
        <Button asChild>
          <div className="flex gap-2">
            <PlusIcon className="h-5 w-5" />
            <Link href="/roles/add-role">Add role</Link>
          </div>
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          data={data}
          columns={RolesColumns}
          searchText="Search by email"
          isCustomSearch={true}
        />
      </div>
    </div>
  );
};

export default RolePage;
