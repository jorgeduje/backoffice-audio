import { Button, FormControl, Link, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

//Link

export const LinkGoBack = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  opacity: "0.5",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    opacity: "1",
  },
}));

//Button

//Button orange (naranja)
export const ButtonCustom = styled(Button)(({ theme }) => ({
  width: "284px",
  height: "48px",
  backgroundColor: theme.palette.primary.main,
  border: "none",
  borderRadius: "0",
  color: theme.palette.secondary.second,
  fontFamily: "'Manrope'",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

//Button black (negro)
export const ButtonCustom2 = styled(Button)(({ theme }) => ({
  width: "284px",
  height: "48px",
  backgroundColor: theme.palette.secondary.second,
  border: `2px solid ${theme.palette.secondary.third}`,
  borderRadius: "0",
  color: theme.palette.secondary.third,
  fontFamily: "'Manrope'",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.third,
    color: theme.palette.secondary.second
  },
}));

//Button white (blanco)
export const ButtonCustom3 = styled(Button)(({ theme }) => ({
  width: "284px",
  height: "48px",
  backgroundColor: "transparent",
  border: `none`,
  borderRadius: "0",
  color: theme.palette.secondary.third,
  mixBlendMode: "normal",
  opacity: "0.5",
  fontFamily: "'Manrope'",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main
  },
}));

//TextField

export const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.third,
      cursor: "pointer",
    },
    "& fieldset": {
      width: "100%",
      border: `2px solid ${theme.palette.primary.third}`,
      borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));
export const CssTextFieldPassword = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.third,
      cursor: "pointer",
    },
    "& fieldset": {
      width: "100%",
      border: `2px solid ${theme.palette.primary.third}`,
      borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));
