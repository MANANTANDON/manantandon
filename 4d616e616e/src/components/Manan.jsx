import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { ImgComponent } from "./ImgComponent";
import { StyledBox, StyledContainer } from "./StyledComponents";

export const Manan = () => {
  return (
    <>
      <StyledContainer maxWidth="xl">
        <Box sx={{ width: { xs: 400, sm: 600 } }} mt={4}>
          <Card elevation={4}>
            <CardContent>
              <Stack>
                <StyledBox>
                  <ImgComponent />
                  <Typography
                    variant="h1"
                    fontSize={{ xs: "16px", sm: "25px" }}
                    mt={3}
                  >
                    Manan Tandon aka 4d616e616e
                  </Typography>
                </StyledBox>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </StyledContainer>
    </>
  );
};
