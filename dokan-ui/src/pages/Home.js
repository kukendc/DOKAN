import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { fetchProductCart } from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductCart();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    return fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} xs={12} md={4} item>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
