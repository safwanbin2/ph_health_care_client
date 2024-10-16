import PHModal from "@/components/Modal/PHModal/PHModal";
import { TextField } from "@mui/material";
import React, { Dispatch } from "react";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create New Speciality">
        <TextField placeholder="Specialty Title" />
      </PHModal>
    </>
  );
};

export default SpecialtyModal;
