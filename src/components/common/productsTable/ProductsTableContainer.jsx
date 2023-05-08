import axios from "axios";
import ProductsTable from "./ProductsTable";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import swal from "sweetalert";

const ProductsTableContainer = () => {
  const [products, setProducts] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(products)
  }, []);

  const deleteProductById = (id) => {
      swal({
      title: "Are you sure you want to delete this product?",
      // text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(async(res) => {
        setDeleteProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!products) {
    return <Loading />;
  }

  return (
    <ProductsTable products={products} deleteProductById={deleteProductById} openModal={openModal} setOpenModal={setOpenModal}/>
  );
};

export default ProductsTableContainer;
