"use client";

import CouponColumns from "@/components/coupon/CouponColumns";
import { ICouponData } from "@/components/coupon/coupon.types";
import PlusIcon from "@/components/icons/PlusIcon";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data: ICouponData[] = [
  {
    name: "Phone",
    productName: "t-shart brand new",
    discount: "30%",
  },
];

const CouponPage = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between ">
        <h2 className="text_primary mb-0">Coupon</h2>
        <Button asChild>
          <div className="flex gap-2">
            <PlusIcon className="h-5 w-5" />
            <Link href="/coupon/add-coupon">Add Coupon</Link>
          </div>
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          data={data}
          columns={CouponColumns}
          searchText="Search by name"
          isCustomSearch={true}
        />
      </div>
    </div>
  );
};

export default CouponPage;
