import { Box } from "@mui/material";
import { ButtonCustom, LinkGoBack } from "../../Custom/CustomComponents";
import AddIcon from "@mui/icons-material/Add";
import ProductsTableContainer from "../../common/productsTable/ProductsTableContainer";
import EditProductModalContainer from "../../common/editProduct/editProductModal/EditProductModalContainer";
import NewProductModalContainer from "../../common/newProduct/newProductModal/NewProductModalContainer";

const Products = ({
  deleteProductById,
  handleOpen,
  handleClose,
  products,
  editProductModal,
  navigate,
  open,
  openEdit,
  handleCloseEdit,
  productForEdit
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // margin: "3rem 3rem 0",
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
      <EditProductModalContainer
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
        productForEdit={productForEdit}
      />
    </>
  );
};

export default Products;
