
import EditProduct from "./EditProduct";
import { useEffect, useState } from "react";
import axios from "axios";


const EditProductContainer = ({id}) => {

  const [editProduct, setEditProduct] = useState(null);
 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setEditProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(editProduct)
  }, [editProduct, id]);
  return <EditProduct />;
};

export default EditProductContainer;
