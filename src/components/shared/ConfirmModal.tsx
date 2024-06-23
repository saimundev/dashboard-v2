import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  modalAnimate,
  modalAnimateSlideDown,
  modalOverlyAnimate,
} from "../animation/animation";
import DeleteIcon from "../icons/DeleteIcon";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  handleConfirm: () => void;
  type?: "slide";
};

const ConfirmModal = ({ open, onClose, handleConfirm, type }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={modalOverlyAnimate}
          initial="hide"
          animate="show"
          exit="hide"
          className="h-screen w-full flex justify-center items-center bg-black/80 fixed top-0 left-0 right-0"
        >
          <motion.div
            variants={type === "slide" ? modalAnimateSlideDown : modalAnimate}
            initial="hide"
            animate="show"
            exit="hide"
            className="bg-white rounded shadow w-1/4 p-6 text-center relative"
          >
            <div className="" onClick={() => onClose(false)}>
              <CloseIcon className="absolute top-2 right-2 w-5 h-5 cursor-pointer " />
            </div>

            <DeleteIcon className="mx-auto w-10 h-10 text-red-500" />

            <h2 className="text-2xl font-bold mt-4">Confirm Delete</h2>
            <p className="text-sm mt-1 text-muted-foreground">
              Are you sure you want to delete this item?
            </p>
            <div className="flex gap-4 justify-end mt-6">
              <Button variant="ghost" onClick={() => onClose(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirm}>
                Delete
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
