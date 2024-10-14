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

const Sidebar = () => {
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return <Box>{drawer}</Box>;
};

export default Sidebar;
