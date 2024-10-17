import PHFullScreenModal from "@/components/Modal/PHModal/PHFullScreenModal";
import { Box, Typography } from "@mui/material";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: any;
};

const CreateDoctorModal = ({ open, setOpen }: TProps) => {
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create Doctor">
      <Box>
        <Typography variant="h6" gutterBottom component="div">
          Creat doctor child
        </Typography>
      </Box>
    </PHFullScreenModal>
  );
};

export default CreateDoctorModal;
