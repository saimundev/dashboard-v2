"use client";

import ArrowBackIcon from "@/components/icons/ArrowBackIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IPickColor } from "@/types/product.type";
import PickColor from "@/components/dashboard/PickColor";
import { colors } from "@/data/ColorData";
import ImageUploader from "@/components/shared/ImageUploader";
import "react-quill/dist/quill.snow.css";
import { SignUpFormSchema } from "@/validation/formValidation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import DeleteIcon from "@/components/icons/DeleteIcon";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddProduct = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const [firstImage, setFirstImage] = useState<File[]>([]);
  const [selectColor, setSelectedColor] = useState<IPickColor[]>([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");

  const handleDelete = (name: string) => {
    const deletedImage = firstImage.filter((image) => image.name !== name);
    setFirstImage(deletedImage);
  };

  console.log("image", firstImage);

  const onSubmit = (data: z.infer<typeof SignUpFormSchema>) => {};
  return (
    <div>
      <div className="flex gap-4 items-center mb-6">
        <Button asChild size="icon" className="h-10">
          <Link href="/product">
            <ArrowBackIcon className="w-5 h-5" />
          </Link>
        </Button>
        <h2 className="text_primary mb-0">Add Product</h2>
      </div>

      {/* product form */}
      <div className="flex justify-center items-center h-[calc(100%-100px)]">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create Category</CardTitle>
            <CardDescription>
              Create your category in your project
            </CardDescription>
          </CardHeader>
          <div className="flex">
            {/* Create product  */}
            <div className="w-full md:w-9/12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="flex flex-col space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          setName(field.value);
                          return (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Name..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => {
                          setPrice(field.value);
                          return (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input placeholder="Price..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        control={form.control}
                        name="discount"
                        render={({ field }) => {
                          setDiscount(field.value);
                          return (
                            <FormItem>
                              <FormLabel>Discount</FormLabel>
                              <FormControl>
                                <Input placeholder="Discount..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => {
                          setStock(field.value);
                          return (
                            <FormItem>
                              <FormLabel>Stock</FormLabel>
                              <FormControl>
                                <Input placeholder="Stock..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Caegor" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  m@example.com
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  m@google.com
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  m@support.com
                                </SelectItem>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* select color */}

                      <div className="">
                        <PickColor
                          selectColor={selectColor}
                          setSelectedColor={setSelectedColor}
                          colors={colors}
                        />
                      </div>
                    </div>
                    <div className="">
                      <FormLabel>Chose Images</FormLabel>
                      <ImageUploader
                        onUploadFile={setFirstImage}
                        fileSize={4}
                        className="h-36"
                      />
                    </div>
                    <div className="">
                      <FormLabel>Description</FormLabel>
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        className=""
                      />
                    </div>
                  </CardContent>

                  {/* submit button action */}
                  <CardFooter className="flex justify-end">
                    <Button type="submit" size="lg">
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </div>

            {/* preview Product */}
            <div className="w-0 hidden md:w-1/4 md:block pr-6 ">
              <h1 className="text_primary mb-0">Preview</h1>
              <div className="border border-gray-200  rounded-lg p-2">
                <div className="w-full ">
                  {firstImage.length > 0 && (
                    <div className="">
                      <div className="relative">
                        <DeleteIcon className="absolute top-2 right-2 w-5 h-5 cursor-pointer text-red-500" />
                        <img
                          src={URL.createObjectURL(firstImage[0])}
                          className="w-full h-[200px] object-fill rounded-lg"
                          alt=""
                        />
                      </div>
                      <div className="grid grid-cols-3 mt-2 gap-4 ">
                        {firstImage
                          .slice(1, firstImage.length)
                          .map((image, index) => (
                            <div className="relative">
                              <img
                                key={index}
                                className="w-full h-[100px] object-fill rounded-lg"
                                src={URL.createObjectURL(image)}
                                alt=""
                              />
                              <div onClick={() => handleDelete(image.name)}>
                                <DeleteIcon className="absolute top-1 right-1 w-5 h-5 cursor-pointer text-red-500" />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
                {name && (
                  <h2 className="text-center text-xl font-bold py-4">{name}</h2>
                )}
                <div className="space-y-2">
                  {price && <h3 className="font-semibold">Price: {price}</h3>}
                  {stock && <h4 className="font-semibold">Stock: {stock}</h4>}
                  {discount && (
                    <h4 className="font-semibold">Discount: {discount}</h4>
                  )}
                  {category && (
                    <h4 className="font-semibold">Discount: {category}</h4>
                  )}
                  <div className="">
                    {selectColor.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        <span className="font-semibold">Colors:</span>
                        {selectColor?.map((color) => (
                          <div
                            style={{ background: color.colorCode }}
                            key={color.id}
                            className={cn(
                              "w-6 h-6 rounded cursor-pointer flex justify-center items-center"
                            )}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                  {value && (
                    <div className="">
                      <h4 className="font-semibold"> Description:</h4>
                      <p
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
