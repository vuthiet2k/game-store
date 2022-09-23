import iconHeadUser from "../assets/icon/headuser.svg";
import iconHeadCart from "../assets/icon/headcart.svg";

import { Box, Button, styled } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function UserCart() {
  const { cart } = useContext(CartContext);
  return (
    <Box>
      <Link to="/log-in" style={{textDecoration: 'none'}}>
        <Button sx={{ textTransform: "none", color: "#fff", gap: "16px" }}>
          <IconRoute alt="icon" src={iconHeadUser} />
          <H3Route>Hoang Vu Thiet</H3Route>
        </Button>
      </Link>

      <Link to="/cart" style={{textDecoration: 'none'}}>
        <Button
          sx={{
            textTransform: "none",
            color: "#fff",
            gap: "16px",
            marginLeft: "30px",
          }}
        >
          <IconRoute alt="icon" src={iconHeadCart} />
          <H3Route>{cart.length}</H3Route>
        </Button>
      </Link>
    </Box>
  );
}

const IconRoute = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default UserCart;