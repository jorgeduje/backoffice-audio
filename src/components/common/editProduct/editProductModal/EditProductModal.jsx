import { Box, Modal } from "@mui/material";
import EditProductFormContainer from "../editProductForm/EditProductFormContainer";

const EditProductModal = ({
  openEdit,
  handleCloseEdit,
  style,
  productForEdit,
  editProduct
}) => {
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProductFormContainer productForEdit={productForEdit} editProduct={editProduct} />
        </Box>
      </Modal>
    </div>
  );
};

export default EditProductModal;
