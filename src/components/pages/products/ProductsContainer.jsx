import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Products from "./Products";
import { deleteById, getAllProducts } from "../../../services/products";

const ProductsContainer = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);
  const [isDeleted, setIsDelete] = useState(false);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setIsDelete(false);
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(products)
  }, [isDeleted]);

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
        deleteById(id)
          .then(() => setIsDelete(true))
          .catch((err) => console.log(err))
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        console.log("nooo");
      }
    });
  };

  const editProductModal = (item) => {
    handleOpen();
  };
  return (
    <Products
      deleteProductById={deleteProductById}
      handleOpen={handleOpen}
      handleClose={handleClose}
      products={products}
      editProductModal={editProductModal}
      navigate={navigate}
      open={open}
    />
  );
};

export default ProductsContainer;
