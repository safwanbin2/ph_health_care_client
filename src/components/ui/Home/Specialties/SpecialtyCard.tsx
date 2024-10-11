import { TSpecialty } from "@/interfaces";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SpecialtyCard = ({ specialty }: { specialty: TSpecialty }) => {
  const { id, title, icon } = specialty;
  return (
    <Box
      sx={{
        flex: 1,
        alignItems: "center",
        bgcolor: "rgba(244, 244, 244, 1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px 10px",
        border: "1px solid rgba(250, 250, 250, 1)",
        gap: "10px",
        borderRadius: "10px",
        "& img": {
          height: 50,
          width: 50,
        },
        "&:hover": {
          border: "1px solid #73EC8B",
        },
      }}
    >
      <Image src={icon} alt={title} width={50} height={50} />
      <Typography
        component="h4"
        sx={{
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SpecialtyCard;
