import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { USER_ROLE } from "@/constants";
import { getUserInfo } from "@/services/auth.service";

const Sidebar = () => {
  const userInfo = getUserInfo();
  const drawer = (
    <div>
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
          <ListItem
            component={Link}
            href={item.path}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return <Box>{drawer}</Box>;
};

export default Sidebar;
