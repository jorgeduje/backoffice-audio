import NewProductModal from "./NewProductModal";

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

const NewProductModalContainer = ({ open, handleClose }) => {
  return (
    <NewProductModal
      open={open}
      handleClose={handleClose}
      style={style}
    />
  );
};

export default NewProductModalContainer;
