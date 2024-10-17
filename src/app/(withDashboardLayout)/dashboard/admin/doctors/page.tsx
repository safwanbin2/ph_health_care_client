"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import CreateDoctorModal from "./components/CreateDoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Doctor</Button>
        <CreateDoctorModal open={modalOpen} setOpen={setModalOpen} />
        <Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search doctor name"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
