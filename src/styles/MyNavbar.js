import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const MyLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: "flex",
  margin: theme.spacing(1),
  textDecoration: "none",
}));
