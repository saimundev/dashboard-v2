"use client";

import PlusIcon from "@/components/icons/PlusIcon";
import ProductColumns from "@/components/product/ProductColumns";
import { ProductData } from "@/components/product/product.types";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const data: ProductData[] = [
  {
    name: "t-shart",
    stock: 2,
    price: 100,
    image: "Image",
  },
];

const ProductPage = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text_primary">Products</h2>

        <Button asChild>
          <div className="flex gap-2">
            <PlusIcon />
            <Link href="/product/add-product">Add Product</Link>
          </div>
        </Button>
      </div>
      <div className="mt-8">
        <DataTable data={data} columns={ProductColumns} />
      </div>
    </div>
  );
};

export default ProductPage;
