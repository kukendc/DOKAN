import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 3,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const { cart } = React.useContext(CartContext);

  const renderCart = () => {
    if (cart.itemsCount !== 0) {
      return (
        <Link to={"/cart"} className={classes.link}>
          <Badge badgeContent={cart.itemsCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      );
    } else
      return (
        <Badge badgeContent={cart.itemsCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      );
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <LocalMallIcon />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.title}
        >
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        {renderCart()}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
