import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({
  item,
}: {
  item: { title: string; path: string; icon: any };
}) => {
  const linkPath = `/dashboard/${item.path}`;
  const currentPath = usePathname();

  return (
    <ListItem
      sx={{
        ...(linkPath === currentPath
          ? {
              borderRight: "3px solid #0D92F4",
              "& svg": {
                color: "#0D92F4",
              },
            }
          : {}),
        mb: 1,
      }}
      component={Link}
      href={linkPath}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>{<item.icon />}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
