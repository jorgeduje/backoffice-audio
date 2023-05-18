import NewProductModal from "./NewProductModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "calc(50% + 120px)",
  transform: "translate(-50%, -50%)",
  width: {lg: ' 40vw', xs: '50vw'},
  height:{lg:'80vh', xs:'60vh'},
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY:'scroll'
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
