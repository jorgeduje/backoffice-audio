import { Box, TextField } from "@mui/material";
import { ButtonCustom, CssTextField } from "../../../Custom/CustomComponents";

export const EditProfuctForm = ({ productForEdit, editProduct }) => {
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "32px" }}>
        EDIT PRODUCT
      </h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>Id</label>
        <CssTextField disabled defaultValue={productForEdit.id} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>Name</label>
        <CssTextField defaultValue={productForEdit.name} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
          Category
        </label>
        <CssTextField defaultValue={productForEdit.category} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
          Price
        </label>
        <CssTextField defaultValue={productForEdit.price} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
          Stock
        </label>
        <CssTextField defaultValue={productForEdit.stock} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
          Description
        </label>
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          defaultValue={productForEdit.description}
        />
      </Box>
      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
          Image
        </label>
        <input type="url" />
      </Box> */}
      <ButtonCustom
        type="submit"
        onClick={() => editProduct(productForEdit.id)}
        style={{ width: "100%", marginTop: "2rem" }}
      >
        Send
      </ButtonCustom>
    </div>
  );
};
