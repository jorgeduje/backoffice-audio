import EditProductModal from "./EditProductModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "calc(50% + 120px)",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EditProductModalContainer = ({
  openEdit,
  handleCloseEdit,
  productForEdit,
  editProduct
}) => {
  return (
    <EditProductModal
      productForEdit={productForEdit}
      openEdit={openEdit}
      handleCloseEdit={handleCloseEdit}
      style={style}
      editProduct={editProduct}
    />
  );
};

export default EditProductModalContainer;
