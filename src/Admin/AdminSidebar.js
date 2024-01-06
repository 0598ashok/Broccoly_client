import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FundOutlined from "@ant-design/icons/FundOutlined";
import FormOutlined from "@ant-design/icons/FormOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Logo from "../../src/images/logo white bg.png"

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.primary.main,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AdminSidebar = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const { pathname } = location;
  // console.log(pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  



  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "transparent" ,boxShadow:"none"}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }),color:"#000" }}
            
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Broccoly
          </Typography> */}
              <div className="m-auto">
            <img src={Logo} alt="logo" style={{width:"100px"}}/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            // backgroundColor:
            //   theme.palette.mode === "dark"
            //     ? theme.palette.background.default
            //     : theme.palette.background.paper,
            backgroundColor:"#0c1e35",
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{color:"#fff"}}/>
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="mt-4">
          <ListItem disablePadding>
            <NavLink
              to="/packages"
              className={pathname === "/packages" ? "active_nav" : "inactive_nav"}
              style={{ color: "#7d84ab", textDecoration: "none"}}
            >
              <ListItemButton >
                <ListItemIcon className="admin_sb_icons">
                  <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Packages" className="admin_sb_fields"/>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="/products"
              className={pathname === "/products" ? "active_nav" : ""}
              style={{ color: "#7d84ab", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon className="admin_sb_icons">
                <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="/nutrition-information"
              className={pathname === "/nutrition-information" ? "active_nav" : ""}
              style={{ color: "#7d84ab", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon className="admin_sb_icons">
                <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Nutrition information" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="#"
              className={pathname === "#" ? "active_nav" : ""}
              style={{ color: "#7d84ab", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon className="admin_sb_icons">
                <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="#"
              className={pathname === "#" ? "active_nav" : ""}
              style={{ color: "#7d84ab", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon className="admin_sb_icons">
                <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="#"
              className={pathname === "#" ? "active_nav" : ""}
              style={{ color: "#7d84ab", textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon className="admin_sb_icons">
                <FormOutlined className="admin_sb_icon"/>
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children} {/* Render the children here */}
      </Main>
    </Box>
  );
};

export default AdminSidebar;
