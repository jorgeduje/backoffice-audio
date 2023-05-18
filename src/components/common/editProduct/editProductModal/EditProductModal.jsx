import { Box, Modal } from "@mui/material";
import EditProductFormContainer from "../editProductForm/EditProductFormContainer";

const EditProductModal = ({
  openEdit,
  handleCloseEdit,
  style,
  productForEdit,
}) => {
  return (
    <Modal
      open={openEdit}
      onClose={handleCloseEdit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EditProductFormContainer
          productForEdit={productForEdit}
        />
      </Box>
    </Modal>
  );
};

export default EditProductModal;
