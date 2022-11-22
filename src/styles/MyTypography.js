import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export const MyTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "42px",
  },
}));
