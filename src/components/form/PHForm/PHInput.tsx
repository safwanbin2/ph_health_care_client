import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  fullWidth: boolean;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  placeholder?: string;
  required: boolean;
};

const PHInput = ({
  name,
  fullWidth,
  label,
  type = "text",
  size = "small",
  required,
  placeholder,
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
          variant="outlined"
          placeholder={placeholder || label}
          required={required}
        />
      )}
    />
  );
};

export default PHInput;
