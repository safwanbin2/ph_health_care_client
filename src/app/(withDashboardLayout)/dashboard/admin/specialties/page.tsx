"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";
import React from "react";

const SpecialtiesPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={() => setModalOpen(true)}>Create Specialty</Button>
          <SpecialtyModal open={modalOpen} setOpen={setModalOpen} />
          <Box>
            <TextField size="small" placeholder="Search specialty" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SpecialtiesPage;
