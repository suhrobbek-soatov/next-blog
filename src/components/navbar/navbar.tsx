import { FC, useState } from "react";
import Link from "next/link";
import * as Mui from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

import { navLinks } from "@/helpers/constants";

interface Props {
  window?: () => Window;
}

const Navbar: FC = ({ window }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

  const drawer = (
    <Mui.Box onClick={handleDrawerToggle} sx={{ textAlign: "center", color: "white", paddingX: "15px" }}>
      <Mui.Box paddingY={1} display="flex" justifyContent="space-between" alignItems="center">
        <Mui.Typography fontWeight={700}>BLOG</Mui.Typography>
        <Close />
      </Mui.Box>
      <Mui.Divider />
      <Mui.List>
        {navLinks.map(item => (
          <Link key={item.route} href={item.route}>
            <Mui.ListItem disablePadding>
              <Mui.ListItemButton sx={{ textAlign: "center" }}>
                <Mui.ListItemText primary={item.text} />
              </Mui.ListItemButton>
            </Mui.ListItem>
          </Link>
        ))}
      </Mui.List>
    </Mui.Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Mui.Box height="10vh" display="flex">
      <Mui.AppBar sx={{ bgcolor: "#141414", height: "10vh", justifyContent: "center" }} component="nav">
        <Mui.Toolbar>
          <Mui.IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu sx={{ color: "white" }} />
          </Mui.IconButton>
          <Mui.Box sx={{ flexGrow: 1 }}>
            <Mui.Typography
              variant="h6"
              component="div"
              fontWeight={700}
              sx={{ cursor: "pointer", color: "white", userSelect: "none", display: { xs: "none", sm: "block" } }}
            >
              <Link href="/">BLOG</Link>
            </Mui.Typography>
          </Mui.Box>
          <Mui.Box>
            <Mui.Typography
              variant="h6"
              component="div"
              fontWeight={700}
              sx={{ cursor: "pointer", color: "white", userSelect: "none", display: { xs: "block", sm: "none" } }}
            >
              <Link href="/">BLOG</Link>
            </Mui.Typography>
          </Mui.Box>
          <Mui.Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map(item => (
              <Link key={item.route} href={item.route}>
                <Mui.Button sx={{ color: "#fff " }}>{item.text}</Mui.Button>
              </Link>
            ))}
          </Mui.Box>
        </Mui.Toolbar>
      </Mui.AppBar>
      <nav>
        <Mui.Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "85%" },
          }}
        >
          {drawer}
        </Mui.Drawer>
      </nav>
      <Mui.Toolbar />
    </Mui.Box>
  );
};

export default Navbar;
