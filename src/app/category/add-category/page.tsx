"use client";

import ArrowBackIcon from "@/components/icons/ArrowBackIcon";
import ImageUploader from "@/components/shared/ImageUploader";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import CustomErrorMessage from "@/components/shared/CustomErrorMessage";
import PreviewImage from "@/components/shared/PreviewImage";

const FormSchema = z.object({
  categoryName: z.string().min(3, {
    message: "Category name must be at least 2 characters.",
  }),
});

const AddCategory = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categoryName: "",
    },
  });
  const [categoryImage, setCategoryImage] = useState<File[]>([]);
  const [error, setError] = useState(false);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (categoryImage.length === 0) return setError(true);
    console.log(data, categoryImage);
  };

  const handleRemoveImage = () => {
    setCategoryImage([]);
  };
  return (
    <div className="h-[calc(100vh-81px)] ">
      <div className="flex gap-4 items-center ">
        <Button asChild size="icon" className="h-10">
          <Link href="/category">
            <ArrowBackIcon className="w-5 h-5" />
          </Link>
        </Button>
        <h2 className="text_primary mb-0">Add Category</h2>
      </div>

      {/* category form */}
      <div className="flex justify-center items-center h-[calc(100%-100px)]">
        <Card className="sm:w-3/4 w-full">
          <CardHeader>
            <CardTitle>Create Category</CardTitle>
            <CardDescription>
              Create your category in your project
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="categoryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category name</FormLabel>
                      <FormControl>
                        <Input placeholder="category name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="">
                  <FormLabel>Category Image</FormLabel>
                  {categoryImage.length === 0 ? (
                    <ImageUploader
                      onUploadFile={setCategoryImage}
                      fileSize={1}
                    />
                  ) : (
                    <PreviewImage
                      onRemoveImage={handleRemoveImage}
                      file={categoryImage}
                    />
                  )}

                  <div className="">
                    {error && categoryImage.length === 0 ? (
                      <CustomErrorMessage message="Category image is required" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
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

export default AddCategory;
