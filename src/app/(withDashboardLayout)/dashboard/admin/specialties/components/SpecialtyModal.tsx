import PHModal from "@/components/Modal/PHModal/PHModal";
import React, { Dispatch } from "react";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create New Speciality" />
    </>
  );
};

export default SpecialtyModal;
