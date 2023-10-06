import { Box, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledImageBox = styled(Box)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
});
