import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../apis";

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
      setProduct(res?.data);
    });
    getData("name").catch((err) => {
      console.log(err);
    });
  }, [productID]);

  return (
    <div>
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
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontFamily: "GT Ultrabold",
                fontSize: "3.3em",
                letterSpacing: "1px",
              }}
            >
              {product.name}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} mt={5}>
              <Grid xs={8} sx={{backgroundImage: `url(${product.avatar})`, backgroundSize: 'contaitn', height: '550px'}}></Grid>
              <Grid xs={4}> title</Grid>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Game;
