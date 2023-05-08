import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import EditProductContainer from "../editProduct/EditProductContainer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProductsTable = ({ products, deleteProductById, openModal, setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <TableContainer
      component={Paper}
      sx={{ padding: "4rem", boxShadow: "none" }}
    >
      <Table
        sx={{
          minWidth: 700,
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" sx={{ width: "2rem" }}>
              ID
            </StyledTableCell>
            <StyledTableCell align="center">NAME</StyledTableCell>
            <StyledTableCell align="center">CATEGORY</StyledTableCell>
            <StyledTableCell align="center">PRICE</StyledTableCell>
            <StyledTableCell align="center">STOCK</StyledTableCell>
            <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="center">EDIT</StyledTableCell>
            <StyledTableCell align="center">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell align="center">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.category}</StyledTableCell>
              <StyledTableCell align="center">{item.price}</StyledTableCell>
              <StyledTableCell align="center">{item.stock}</StyledTableCell>
              <StyledTableCell align="center">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={()=>navigate(`/editProduct/${item.id}`)}>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={()=>setOpenModal(true)}>
                  <DeleteIcon />
                </IconButton>
                {openModal && <EditProductContainer id={item.id}/>}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
