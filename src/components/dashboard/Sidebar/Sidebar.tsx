import { Box, Divider, List, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { getUserInfo } from "@/services/auth.service";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const userInfo = getUserInfo();

  return (
    <Box>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 2,
          }}
          component={Link}
          href={"/"}
        >
          <Image src={assets.svgs.logo} alt="logo" width={30} height={30} />
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            HealthCare
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {drawerItems(userInfo.role).map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
