"use client";

import BannerColumns from "@/components/banner/BannerColumns";
import { IBannerData } from "@/components/banner/banner.types";
import PlusIcon from "@/components/icons/PlusIcon";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data: IBannerData[] = [
  {
    image: "Phone",
    link: "https://localhost/3000",
  },
];

const BannerPage = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center justify-between ">
        <h2 className="text_primary mb-0">Banner</h2>
        <Button asChild>
          <div className="flex gap-2">
            <PlusIcon className="h-5 w-5" />
            <Link href="/banner/add-banner">Add Banner</Link>
          </div>
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          data={data}
          columns={BannerColumns}
          searchText="Search by name"
          isCustomSearch={true}
        />
      </div>
    </div>
  );
};

export default BannerPage;
