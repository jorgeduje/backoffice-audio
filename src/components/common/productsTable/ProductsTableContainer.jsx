import axios from "axios";
import ProductsTable from "./ProductsTable";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import { getAllProducts } from "../../../services/products";

const ProductsTableContainer = () => {
  const [products, setProducts] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(products)
  }, []);

  const deleteProductById = (id) => {
    Swal.fire({
      title: "Do you want delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Okey",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        axios
          .delete(`http://localhost:5000/products/${id}`)
          .then(async (res) => {
            setDeleteProduct(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  if (!products) {
    return <Loading />;
  }

  return (
    <ProductsTable
      products={products}
      deleteProductById={deleteProductById}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export default ProductsTableContainer;
