import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

export const MyAvatar = styled(Avatar)(({ theme }) => ({
   top: theme.spacing(0.4),
   right: theme.spacing(0.1),
   margin: theme.spacing(0.125),
}));
