import React, { useEffect, useState } from "react";
import InputField from "../../modules/common/Input";
import { useFormik } from "formik";
import { ProductFormSchema } from "../../Schema/ProductFromSchema";
import { useNavigate } from "react-router-dom";

function ProductForm({ handleFormSubmit }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategory();
  }, []);
  const initialState = {
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: "",
  };

  const [category, setCategory] = useState("");

  async function fetchCategory() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    setCategory(data);
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: ProductFormSchema,
      onSubmit: (value, action) => {
        handleFormSubmit(value)
          .then((res) => {
            alert("Successful!")
            navigate("/product");
            action.resetForm();
          })
          .catch((err) => console.error(err));
      },
    });

  function getImagesValue(event) {
    const url = event.target.value;
    const images = [];
    images.push(url);

    values.images = images;
  }
  return (
    <div className="card col-8 col-lg-6 mx-auto mt-5 border-0 shadow">
      <div className="card-body">
        <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
          <h1 className="text-center">Product</h1>
          <InputField
            type="text"
            name="title"
            label="Title"
            values={values.title}
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.title}
            touched={touched.title}
          />
          <InputField
            type="text"
            name="price"
            label="Price"
            values={values.price}
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.price}
            touched={touched.price}
          />
          <InputField
            type="text"
            name="description"
            label="Description"
            values={values.description}
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.description}
            touched={touched.description}
          />
          <InputField
            type="text"
            name="images"
            label="Images"
            handleBlur={handleBlur}
            handleChange={getImagesValue}
            error={errors.images}
            touched={touched.images}
          />
          <div className="form-group">
            <label htmlFor="categoryId" className="form-label">
              Category Id
            </label>
            <select
              name="categoryId"
              id="categoryId"
              className={`form-select text-dark ${
                errors.categoryId && touched.categoryId
                  ? "border-danger border-1"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categoryId}
            >
              <option value="" disabled>
                -- Select Option --
              </option>
              {category &&
                category.map((category, i) => (
                  <option value={category.id} key={i}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors.categoryId && touched.categoryId && (
              <div className="form-text text-danger">{errors.categoryId}</div>
            )}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
