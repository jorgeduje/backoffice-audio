import { useFormik } from "formik"
import { EditProfuctForm } from "./EditProfuctForm"
import * as Yup from 'yup';

const EditProductFormContainer = ({productForEdit, editProduct}) => {
 
 const {values, handleChange, handleSubmit, errors} = useFormik({
  initialValues : {
    id: productForEdit.id,
    category: '',
    categoryImage: productForEdit.categoryImage,
    description: '',
    features: productForEdit.features,
    gallery: productForEdit.gallery,
    image: productForEdit.image,
    name: '',
    new: productForEdit.new,
    price: '',
    slug: productForEdit.slug
  },
  onSubmit: (data) => {
    console.log("se envio el formulario", data);
    // editProduct(productForEdit.id)
  },
  validationSchema: Yup.object().shape({
    category: Yup.string().min(3, "The category should have a minimum of 3 letters."),
    description: Yup.string().min(3, "The description should have a minimum of 3 letters."),
    name: Yup.string().min(3, "The name should have a minimum of 3 letters."),
    price: Yup.number().min(1, 'Price should have a minumun of 1 character'),
  }),
  validateOnChange:false,
 });
  return (
    <EditProfuctForm productForEdit={productForEdit} editProduct={editProduct} values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/>
  )
}

export default EditProductFormContainer