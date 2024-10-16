"use client";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";
import React from "react";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialty.api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { TResponse } from "@/interfaces";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDeleteSpecialty = async (id: string) => {
    const consent = window.confirm(
      "Are you sure your want to delete the specialty"
    );
    if (!consent) return;
    const res = await deleteSpecialty(id).unwrap();
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const columns: GridColDef<(typeof data.data)[number]>[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,

      renderCell: ({ row }) => {
        // this is going to show image
        return (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
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
        {isLoading ? (
          <h2>Loading......</h2>
        ) : (
          <Box>
            <Typography mb={2}>All Specialties:</Typography>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid rows={data.data} columns={columns} />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default SpecialtiesPage;
