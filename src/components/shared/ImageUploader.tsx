"use client";

import UploadIcon from "../icons/UploadIcon";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useEffect } from "react";

type onUploadFileProps = {
  onUploadFile: Dispatch<SetStateAction<File[]>>;
  fileSize: number;
  className?: string;
};

const ImageUploader = ({
  onUploadFile,
  fileSize = 4,
  className,
}: onUploadFileProps) => {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      accept: {
        "image/jpeg": [".jpg", ".jpeg", ".png"],
      },
      maxFiles: fileSize,
    });

  const rejectedFileErrorMessage = fileRejections?.map(
    (error) => error.errors[0].code
  );
  console.log("acc", acceptedFiles);

  onUploadFile((prevFile) => ({
    ...prevFile,
    acceptedFiles,
  }));

  return (
    <>
      <div
        className="flex items-center justify-center w-full mt-1"
        {...getRootProps()}
      >
        <label
          htmlFor="dropzone-file"
          className={cn(
            "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
            rejectedFileErrorMessage?.length && "border-red-500",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadIcon />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...getInputProps()}
          />
        </label>
      </div>

      {rejectedFileErrorMessage.length > 0 && (
        <div className="text-red-500 mt-1 ">{rejectedFileErrorMessage[0]}</div>
      )}
    </>
  );
};

export default ImageUploader;
