import * as React from "react";
import { styled, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type TProps = {
  name: string;
  label?: string;
  required: boolean;
  sx?: SxProps;
};

export default function PHFileUploader({ name, label, required, sx }: TProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{
            ...sx,
            ...(!!error?.message && {
              borderColor: "red",
            }),
          }}
        >
          {label || "Upload a file"}
          <Input
            {...field}
            type="file"
            value={value?.fileName}
            onChange={(e) =>
              onChange((e?.target as HTMLInputElement)?.files?.[0])
            }
            sx={{
              display: "none",
            }}
            required={required}
          />
        </Button>
      )}
    />
  );
}
