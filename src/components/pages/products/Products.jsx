import { Box, Typography } from "@mui/material";
import { ButtonCustom, LinkGoBack } from "../../Custom/CustomComponents";
import AddIcon from "@mui/icons-material/Add";
import ProductsTableContainer from "../../common/productsTable/ProductsTableContainer";
import EditProductModalContainer from "../../common/editProduct/editProductModal/EditProductModalContainer";
import NewProductModalContainerner from '../../common/newProduct/newProductModal/NewProductModalContainer'

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
  productForEdit,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          // margin: "3rem 3rem 0",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" xs={12} color={"primary"}>
          Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}
        >
          <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
          <ButtonCustom onClick={handleOpen}>
            <AddIcon />
            &nbsp; product
          </ButtonCustom>
        </Box>
      </Box>
      <ProductsTableContainer
        products={products}
        deleteProductById={deleteProductById}
        editProductModal={editProductModal}
       
      />
      <NewProductModalContainerner open={open} handleClose={handleClose} />
      <EditProductModalContainer
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
        productForEdit={productForEdit}
      />
    </>
  );
};

export default Products;
