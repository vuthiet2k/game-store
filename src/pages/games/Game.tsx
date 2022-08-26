import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../apis";
import Header from "../../part/Haeder/Header";

export interface Product {
  id?: number;
  name?: string;
  avatar?: string;
}

function Game() {
  let { productID } = useParams();

  const [product, setProduct] = useState<Product>({});
  useEffect(() => {
    getData(`name/${productID}`).then((res) => {
      setProduct(res.data);
    });
    getData("name").catch((err) => {
      console.log(err);
    });
  }, [productID]);

  return (
    <div>
      <Header />
      <Box sx={{ backgroundColor: "#000", padding: "30px 50px" }}>
        <Box>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              href="/store"
              sx={{ textTransform: "none", color: "rgb(204, 204, 204)" }}
            >
              <ArrowBackIcon />
              <Typography variant="h4">Store</Typography>
            </Button>
            <Typography variant="h2" sx={{ color: "#fff" }}>
              {product.name}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Game;
