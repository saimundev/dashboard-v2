import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z.string().min(2, {
    message: "Category name must be at least 3 characters.",
  }),
  price: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({
      invalid_type_error: "Only number allow",
      required_error: "he",
    })
  ),
  discount: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({
      invalid_type_error: "Only number allow",
      required_error: "he",
    })
  ),
  stock: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({
      invalid_type_error: "Only number allow",
      required_error: "he",
    })
  ),
  category: z.string(),
});
