import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

const ContainerTop = styled(Container)`
  padding: 20px;
`;

const App = () => {
  return (
    <CartProvider>
      <Router>
        <CssBaseline />
        <NavBar />
        <ContainerTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/check-out">
              <Checkout />
            </Route>
            <Route path="/orders/:code">
              <Order />
            </Route>
          </Switch>
        </ContainerTop>
      </Router>
    </CartProvider>
  );
};

export default App;
