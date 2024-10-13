import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  fullWidth: boolean;
  label?: string;
  type?: string;
  size?: "small" | "medium";
};

const PHInput = ({
  name,
  fullWidth,
  label,
  type = "text",
  size = "small",
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth={fullWidth}
          label={label}
          type={type}
          size={size}
        />
      )}
    />
  );
};

export default PHInput;
