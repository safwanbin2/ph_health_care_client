import PHFileUploader from "@/components/form/PHForm/PHFileUploader";
import PHForm from "@/components/form/PHForm/PHForm";
import PHInput from "@/components/form/PHForm/PHInput";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialty.api";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import React, { Dispatch } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const createSpecialtyValidationSchema = z.object({
  title: z.string().min(1, "Title can not be empty"),
});

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const formData = modifyPayload(values);
    try {
      const { data, message, success } = await createSpecialty(
        formData
      ).unwrap();
      if (success) {
        toast.success(message);
        setOpen(false);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create New Speciality">
        <PHForm
          onSubmit={handleFormSubmit}
          resolver={zodResolver(createSpecialtyValidationSchema)}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput
                name="title"
                label="Specialty Title"
                fullWidth={true}
                size="small"
                type="text"
              />
            </Grid>
            <Grid item md={6}>
              <PHFileUploader
                name="file"
                label="Upload an icon"
                required={true}
              />
            </Grid>
            <Button
              type="submit"
              sx={{
                margin: "16px 0 0 16px",
              }}
            >
              Create
            </Button>
          </Grid>
        </PHForm>
      </PHModal>
    </>
  );
};

export default SpecialtyModal;
