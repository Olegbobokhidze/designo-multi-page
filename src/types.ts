import * as z from "zod";

export type ProjectType = {
  title: string;
  description: string;
  category: string;
  image: string;
};
export const InvoiceType = z.object({
  home: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
});
export type InfoSchemaType = z.infer<typeof InvoiceType>;
