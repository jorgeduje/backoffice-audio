import { useFormik } from "formik";
import { EditProfuctForm } from "./EditProfuctForm";
import * as Yup from "yup";
import { editById } from "../../../../services/products";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./EditProductForm.css";

const EditProductFormContainer = ({ productForEdit }) => {
  const [isEdited, setIsEdited] = useState(false);

  const editProduct = (id, data) => {
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
      id: productForEdit.id,
      category: "",
      categoryImage: productForEdit.categoryImage,
      description: "",
      features: productForEdit.features,
      gallery: productForEdit.gallery,
      image: productForEdit.image,
      name: "",
      new: productForEdit.new,
      price: "",
      slug: productForEdit.slug,
    },
    onSubmit: (data) => {
      // console.log("se envio el formulario", data);
      data.price = parseInt(data.price),
      editProduct(data.id, data);
    },
    validationSchema: Yup.object().shape({
      category: Yup.string().min(
        3,
        "The category should have a minimum of 3 letters."
      ),
      description: Yup.string().min(
        3,
        "The description should have a minimum of 3 letters."
      ),
      name: Yup.string().min(3, "The name should have a minimum of 3 letters."),
      price: Yup.number().min(1, "Price should have a minumun of 1 character"),
    }),
    validateOnChange: false,
  });
  return (
    <EditProfuctForm
      productForEdit={productForEdit}
      editProduct={editProduct}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default EditProductFormContainer;
