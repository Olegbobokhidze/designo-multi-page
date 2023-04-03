import * as z from "zod";

export type ProjectType = {
  title: string;
  description: string;
  category: string;
  image: string;
};
export const InvoiceType = z
  .object({
    home: z.string().min(2),
    email: z.string().min(2),
    phone: z.string().min(2),
    message: z.string().min(2),
  })
  .required();
export type InfoSchemaType = z.infer<typeof InvoiceType>;
