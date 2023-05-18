import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ButtonCustom, CssTextField } from "../../../Custom/CustomComponents";

const NewProductForm = ({ handleChange, handleSubmit, errors }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "32px" }}>
        NEW PRODUCT
      </h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>Slug</label>
        <CssTextField
          name="slug"
          onChange={handleChange}
          error={errors.slug ? true : false}
          helperText={errors.slug}
        />
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
        <CssTextField
          // defaultValue={.name}
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
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
        <CssTextField
          // defaultValue={.category}
          name="category"
          onChange={handleChange}
          error={errors.category ? true : false}
          helperText={errors.category}
        />
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
          Category Image
        </label>
        <CssTextField
          // defaultValue={.name}
          name="categoryImage"
          onChange={handleChange}
          error={errors.categoryImage ? true : false}
          helperText={errors.categoryImage}
        />
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
        <CssTextField
          // defaultValue={.price}
          name="price"
          onChange={handleChange}
          error={errors.price ? true : false}
          helperText={errors.price}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          style={{ fontWeight: "bold", marginLeft: "0.5rem" }}
        >
          New
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
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
          multiline
          rows={4}
          // defaultValue={.description}
          name="description"
          onChange={handleChange}
          error={errors.description ? true : false}
          helperText={errors.description}
        />
      </Box>
      <ButtonCustom
        type="submit"
        // onClick={() => console.log(values)}
        style={{ width: "100%", marginTop: "2rem" }}
      >
        Send
      </ButtonCustom>
    </form>
  );
};

export default NewProductForm;
