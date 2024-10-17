import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  items: string[];
  name: string;
  label: string;
  fullWidth?: boolean;
  required?: boolean;
  size?: "small" | "medium";
  placeholder?: string;
  sx?: SxProps;
};

const PHSelectInput = ({
  items,
  name,
  fullWidth = true,
  label,
  required,
  size = "small",
  placeholder,
  sx,
}: TProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth={fullWidth}
          label={label}
          required={required}
          size={size}
          error={!!error?.message}
          helperText={error?.message}
          placeholder={placeholder || label}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelectInput;
