import EditProduct from "./EditProduct";
// import { useEffect, useState } from "react";
// import axios from "axios";

const EditProductContainer = ({ id, open, handleClose }) => {
  // const [editProduct, setEditProduct] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/products/${id}`)
  //     .then((res) => {
  //       setEditProduct(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(id);
  // }, []);
  return <EditProduct open={open} handleClose={handleClose}/>;
};

export default EditProductContainer;
