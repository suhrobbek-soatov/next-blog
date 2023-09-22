import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import { navLinks } from "@/helpers/constants";

interface Props {
  window?: () => Window;
}

const Navbar: FC = ({ window }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevState => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", paddingX: "15px" }}>
      <Box paddingY={1} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={700}>BLOG</Typography>
        <Close />
      </Box>
      <Divider />
      <List>
        {navLinks.map(item => (
          <Link href={item.route}>
            <ListItem key={item.route} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              fontWeight={700}
              sx={{ cursor: "pointer", userSelect: "none", display: { xs: "none", sm: "block" } }}
            >
              <Link href="/">BLOG</Link>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="div"
              fontWeight={700}
              sx={{ cursor: "pointer", userSelect: "none", display: { xs: "block", sm: "none" } }}
            >
              <Link href="/">BLOG</Link>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map(item => (
              <Link key={item.route} href={item.route}>
                <Button sx={{ color: "#fff " }}>{item.text}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
