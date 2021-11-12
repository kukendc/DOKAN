import React from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

import CartDetail from "../components/CartDetail";

const useStyles = makeStyles({
  total: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
});

const Cart = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <CartDetail />
      <div className={classes.total}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => history.push("/check-out")}
        >
          Check Out
        </Button>
      </div>
    </>
  );
};

export default Cart;
