import { Box } from "@mui/material";
import ProductsTableContainer from "../common/productsTable/ProductsTableContainer";
import { LinkGoBack, ButtonCustom } from "../Custom/CustomComponents";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: "6rem 4rem 0",
          alignItems: "center",
        }}
      >
        <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
        <ButtonCustom><AddIcon /></ButtonCustom>
      </Box>
      <ProductsTableContainer />;
    </>
  );
};

export default Products;
