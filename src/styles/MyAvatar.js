import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

export const MyAvatar = styled(Avatar)(({ theme }) => ({
  top: theme.spacing(1),
  right: theme.spacing(1),
  margin: theme.spacing(0.125),
}));
