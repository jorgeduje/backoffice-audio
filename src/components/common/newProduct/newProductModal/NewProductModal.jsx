import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NewProductFormContainer from "../newProductForm/NewProductFormContainer";

const NewProductModal = ({ open, handleClose, style }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewProductFormContainer />
        </Box>
      </Modal>
    </div>
  );
};

export default NewProductModal;
