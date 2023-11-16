import * as Yup from "yup";

export const ProductFormSchema = Yup.object({
  title: Yup.string().required("Title is required!"),
  price: Yup.string().required("Price is required!"),
  description: Yup.string().required("Description is required!"),
  categoryId: Yup.string().required("Category id is required!"),
  images: Yup.array().required("Images is required!"),
});
