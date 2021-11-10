import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { appConfig } from "../services/config.js";
import { Button } from "@mui/material";
import { CartContext } from "../contexts/CartContext.js";

const ProductCard = ({ product }) => {
  const { photo } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.name} subheader={`$${product.price}`} />
      <CardMedia
        component="img"
        height="150"
        image={`${appConfig.apiURL}${photo.url}`}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          // color="secondary"
          component="span"
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
