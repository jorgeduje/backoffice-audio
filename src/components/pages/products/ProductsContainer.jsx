import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Products from "./Products";
import {
  deleteById,
  editById,
  getAllProducts,
} from "../../../services/products";

const ProductsContainer = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);
  const [isDeleted, setIsDelete] = useState(false);
  const [productForEdit, setProductForEdit] = useState({});

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modal edit
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  // const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setIsDelete(false);
    // setIsEdited(false);
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isDeleted, 
    // isEdited
  ]);

  const deleteProductById = (id) => {
    Swal.fire({
      title: "Do you want to delete it?",
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
    handleOpenEdit();
    setProductForEdit(item);
  };
  const editProduct = (id) => {
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
        editById(id)
          // .then(() => setIsEdited(true))
          // .catch((err) => console.log(err))
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        console.log("nooo");
      }
    });
  };

  let dataProps = {
    deleteProductById,
    handleOpen,
    handleClose,
    products,
    editProductModal,
    navigate,
    open,
    openEdit,
    handleCloseEdit,
    productForEdit,
    editProduct,
  };
  return <Products {...dataProps} />;
};

export default ProductsContainer;
