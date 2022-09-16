import iconAddToCart from "../../assets/icon/addToCart.svg";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductType } from "../../@type/cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Product = ({ to, src, name, money }: ProductType) => {
  const {cart, setCart} = useContext(CartContext);  

  const handlerAddCart = () => {
    setCart([...cart, {id: Number(to), name: name, money: money}])
  }

  return (
    <Box
      sx={{
        backgroundColor: "#202020",
        border: "1px transparent",
        borderRadius: "12px",
        transition: "all 0.3s",
      }}
    >
      <Link to={to}>
        <ImgGame sx={{ backgroundImage: `url(${src})` }} />
      </Link>
      <Box
        m={"15px"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={handlerAddCart} sx={{ textTransform: "none", gap: "15px"}}>
          <Typography variant="h6" sx={{ color: "#fff", fontSize: "16px " }}>
            Add to cart
          </Typography>
          <img
            src={iconAddToCart}
            alt="icon"
            style={{ height: "14px", width: "14px" }}
          />
        </Button>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {money}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Link
          to={to}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "24px ",
            marginLeft: "15px",
            fontWeight: "700",
            paddingBottom: "40px",
          }}
        >
          {name}
        </Link>
        <img
          src={iconAddToCart}
          alt="icon"
          style={{ height: "14px", width: "14px" }}
        />
      </Box>
    </Box>
  );
};

const ImgGame = styled("div")({
  height: '100%',
  width: '100%',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingTop: '60%',
  minWidth: "280px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
});

export default Product;
