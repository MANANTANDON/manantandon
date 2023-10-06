import Image from "next/legacy/image";
import React from "react";
import xo from "../assets/xo.jpeg";
import { StyledImageBox } from "./StyledComponents";

export const ImgComponent = () => {
  return (
    <>
      <StyledImageBox
        sx={{
          height: { xs: "300px", sm: "500px" },
          width: { xs: "300px", sm: "500px" },
        }}
      >
        <Image
          src={xo}
          alt="xo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
      </StyledImageBox>
    </>
  );
};
