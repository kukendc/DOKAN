import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

import { CartContext } from "../contexts/CartContext";
import { appConfig } from "../services/config";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  total: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
});

const Cart = () => {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);
  const { items = [] } = cart;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar
                    alt={item.name}
                    src={`${appConfig.apiURL}${item.photo.url}`}
                    variant="square"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>{item.price * item.qty}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeFromCart(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.total}>
        <Typography variant="h5">${cart.cartTotal.toFixed(2)}</Typography>
      </div>
    </>
  );
};

export default Cart;
