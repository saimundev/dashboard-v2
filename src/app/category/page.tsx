"use client";

import CategoryColumns from "@/components/category/CategoryColumns";
import { CategoryData } from "@/components/category/category.types";
import PlusIcon from "@/components/icons/PlusIcon";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const data: CategoryData[] = [
  {
    name: "Phone",
    image: "image",
  },
];

const CategoryPage = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between ">
        <h2 className="text_primary mb-0">Add Product</h2>
        <Button asChild>
          <div className="flex gap-2">
            <PlusIcon className="h-5 w-5" />
            <Link href="/category/add-category">Add Category</Link>
          </div>
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          data={data}
          columns={CategoryColumns}
          searchText="Search by name"
          isCustomSearch={true}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
