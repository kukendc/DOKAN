import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";

import CartDetail from "../components/CartDetail";
import PersonalDetailForm from "../components/PersonaDetailForm";
import { CartContext } from "../contexts/CartContext";
import { fetchProducts, createOrder } from "../services/api";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: async (values) => {
      const { items = [] } = cart;
      const productIds = items.map((item) => `id_in=${item.id}`);
      const query = productIds.join("&");
      console.log(query);
      try {
        const products = await fetchProducts(query);
        let total = 0;
        items.forEach((item) => {
          const product = products.find((p) => p.id === item.id);
          total += item.qty * product.price;
        });
        const order = await createOrder({
          ...values,
          total: `${total}`,
        });
        history.push(`/orders/${order.code}`);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { getFieldProps, errors, touched } = formik;
  return (
    <div>
      <CartDetail />
      <PersonalDetailForm
        getFieldProps={getFieldProps}
        errors={errors}
        touched={touched}
      />
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={formik.handleSubmit}
          fullWidth
          disabled={cart.cartTotal <= 0 || cart.items.length === 0}
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
