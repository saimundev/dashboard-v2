"use client";

import DataTable from "@/components/shared/DataTable";
import UserColumns from "@/components/user/UserColumns";
import { UserData } from "@/components/user/user.types";
import { VisibilityState } from "@tanstack/react-table";
import React, { ChangeEvent, useState } from "react";

const data: UserData[] = [
  {
    name: "t-shart",
    email: "saimun@gmail.com",
    createdAt: new Date("2024-05-12T00:00:00.000Z"),
  },
];

const UserPage = () => {
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div className="">
      <h2 className="text_primary">Users</h2>
      <DataTable
        data={data}
        columns={UserColumns}
        searchText="Search by email"
        onSearch={search}
      />
    </div>
  );
};

export default UserPage;
