"use client";

import ArrowBackIcon from "@/components/icons/ArrowBackIcon";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import AutoSearch from "@/components/shared/AutoSearch";
import MultiSelectDropdown from "@/components/shared/MultiSelectDropdown";

export interface ISelectData {
  label: string;
  value: string;
}

const FormSchema = z.object({
  couponName: z.string().min(5, {
    message: "Coupon name must be at least 5 characters.",
  }),
  ds: z.string().min(5, {
    message: "Coupon name must be at least 5 characters.",
  }),
});

const AddCoupon = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      couponName: "",
    },
  });

  const [selectItem, setSelectItem] = useState<ISelectData[]>([]);
  const [selected, setSelected] = useState<ISelectData[]>([]);
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];

  const onSubmit = (data: z.infer<typeof FormSchema>) => {};

  return (
    <div className="h-[calc(100vh-81px)] ">
      <div className="flex gap-4 items-center ">
        <Button asChild size="icon" className="h-10">
          <Link href="/category">
            <ArrowBackIcon className="w-5 h-5" />
          </Link>
        </Button>
        <h2 className="text_primary mb-0">Add Coupon</h2>
      </div>

      {/* category form */}
      <div className="flex justify-center items-center h-[calc(100%-100px)]">
        <Card className="sm:w-3/4 w-full">
          <CardHeader>
            <CardTitle>Create Coupon</CardTitle>
            <CardDescription>Create coupon product or category</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="couponName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Coupon name</FormLabel>
                      <FormControl>
                        <Input placeholder="coupon name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="">
                  <AutoSearch
                    query="http://dummyjson.com/users/search"
                    setSelectItem={setSelectItem}
                    selectItem={selectItem}
                  />
                </div>

                <MultiSelectDropdown
                  options={options}
                  value={selected}
                  onChange={setSelected}
                />
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Link href="/category">Cancel</Link>
                </Button>
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AddCoupon;
