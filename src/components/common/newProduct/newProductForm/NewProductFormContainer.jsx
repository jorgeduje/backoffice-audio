import NewProductForm from "./NewProductForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editById, postProduct } from "../../../../services/products";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewProductFormContainer = () => {
  const [isEdited, setIsEdited] = useState(false);

  const postNewProduct = (id, data) => {
    console.log("hi", id);
    Swal.fire({
      title: "Do you want to edit it?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Okey",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        editById(id, data)
          .then(() => setIsEdited(true))
          .catch((err) => console.log(err))
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        console.log("nooo");
      }
    });
  };

  useEffect(() => {
    setIsEdited(false);
  }, [isEdited]);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      category: "",
      categoryImage: "",
      description: "",
      features: "",
      gallery: "",
      image: "",
      name: "",
      new: "",
      price: "",
      slug: "",
    },
    onSubmit: (data) => {
      // console.log("se envio el formulario", data);
      (data.price = parseInt(data.price)), postProduct(data);
    },
    validationSchema: Yup.object().shape({
      category: Yup.string()
        .required("This field is requiered")
        .min(3, "The category should have a minimum of 3 letters."),
      categoryImage: Yup.string()
        .required("This field is requiered")
        .min(3, "The categoryImage should be an URL."),
      features: Yup.string()
        .required("This field is requiered")
        .min(3, "idk what to say."),
      gallery: Yup.string()
        .required("This field is requiered")
        .min(3, "The gallery should be an URL."),
      image: Yup.string()
        .required("This field is requiered")
        .min(3, "The image should be an URL."),
      description: Yup.string()
        .required("This field is requiered")
        .min(3, "The description should have a minimum of 3 letters."),
      name: Yup.string().required("This field is requiered").min(3, "The name should have a minimum of 3 letters."),
      new: Yup.boolean().required("This field is requiered"),
      price: Yup.number().required("This field is requiered").min(1, "Price should have a minumun of 1 character"),
      slug: Yup.string().required("This field is requiered").min(3, "The slug should have a minimum of 3 letters."),
    }),
    validateOnChange: false,
  });
  return (
    <NewProductForm
      postNewProduct={postNewProduct}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default NewProductFormContainer;
