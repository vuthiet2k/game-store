import { Box, Button, Grid, Typography, } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../apis";
import Product from "../Product/Product";
import { ReactComponent as Layout4 } from "../../assets/icon/layoutTopic.svg";
import { ReactComponent as Layout1 } from "../../assets/icon/layoutTopic1.svg";

export const Topic = () => {
  const [layout, setLayout] = useState<number>(3);
  const [allData, setAllData] = useState<any[]>([]);
  useEffect(() => {
    getData("name").then((res) => {
      setAllData(res?.data);
    });
    getData("name").catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Box pb={"280px"} sx={{ display: "block" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "60px",
            letterSpacing: "1px",
            fontWeight: "700",
            mb: "10px",
          }}
        >
          Trending and interesting
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          Based on player counts and ratings
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "28px",
          mb: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
            }}
          >
            Filter by: None
          </Button>
          <Button
            sx={{
              ml: "10px",
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
            }}
          >
            Clear Filter
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#696969",
              fontSize: "16px",
            }}
          >
            Display options:
          </Typography>
          <Button onClick={() => setLayout(3)}>
            <Layout4
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
          </Button>
          <Button onClick={() => setLayout(8)}>
            <Layout1
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {allData.map((product, index) => {
            return (
              <Grid item={true} xs={layout} key={index}>
                <Product
                  to={`/store/${product.id}`}
                  name={product.name}
                  src={product.avatar}
                  money={product.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
