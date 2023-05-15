import { Box } from "@mui/material";
import ProductsTableContainer from "../common/productsTable/ProductsTableContainer";
import { LinkGoBack, ButtonCustom } from "../Custom/CustomComponents";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { deleteById, getAllProducts } from "../../services/products";
import Swal from "sweetalert2";
import NewProductModalContainer from "../common/newProductModal/NewProductModalContainer";

const Products = () => {
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

  const editProductModal = (item)=>{
    handleOpen()
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "3rem 3rem 0",
          alignItems: "center",
        }}
      >
        <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
        <ButtonCustom onClick={handleOpen}>
          <AddIcon />
          &nbsp; product
        </ButtonCustom>
      </Box>
      <ProductsTableContainer
        products={products}
        deleteProductById={deleteProductById}
        editProductModal={editProductModal}
      />
      <NewProductModalContainer open={open} handleClose={handleClose} />
    </>
  );
};

export default Products;
