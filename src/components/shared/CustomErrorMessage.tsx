import { cn } from "@/lib/utils";

type CustomMessageProps = {
  message: string;
  className?: string;
};

const CustomErrorMessage = ({ message, className }: CustomMessageProps) => {
  return <div className={cn("text-red-500 mt-1", className)}>{message}</div>;
};

export default CustomErrorMessage;
