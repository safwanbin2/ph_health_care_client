"use client";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CreateDoctorModal from "./components/CreateDoctorModal";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctor.api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounce } from "@/redux/hooks";
import { toast } from "sonner";

const DoctorsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceTerm = useDebounce({
    searchTerm,
    delay: 600,
  });
  if (debounceTerm) {
    query["searchTerm"] = debounceTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDeleteSpecialty = async (id: string) => {
    const consent = window.confirm(
      "Are you sure your want to delete the specialty"
    );
    if (!consent) return;
    try {
      const res = await deleteDoctor(id).unwrap();
      if (!res.success) throw new Error(res?.message);
      toast.success(res?.message);
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
      console.log(error);
    }
  };

  const columns: GridColDef<(typeof data.data)[number]>[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },

    {
      field: "Action",
      headerName: "action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // this is going to show image
        return (
          <IconButton
            onClick={() => handleDeleteSpecialty(row.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Doctor</Button>
        <CreateDoctorModal open={modalOpen} setOpen={setModalOpen} />
        <Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search doctor name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
      </Stack>
      {isLoading ? (
        <h2>Loading......</h2>
      ) : (
        <Box>
          <Typography mb={2}>All Doctors:</Typography>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid rows={data.data} columns={columns} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DoctorsPage;
