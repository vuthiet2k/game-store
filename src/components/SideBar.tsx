import { ReactComponent as IconFiltersWishlist } from "../assets/icon/filterswish.svg";
import { ReactComponent as IconFiltersRating } from "../assets/icon/filtersrating.svg";
import { ReactComponent as IconFiltersReviews } from "../assets/icon/filtersreview.svg";
import { ReactComponent as IconGenresAction } from "../assets/icon/genresaction.svg";
import { ReactComponent as IconGenresStrategy } from "../assets/icon/genresstrategy.svg";
import { ReactComponent as IconGenresRPG } from "../assets/icon/genresrpg.svg";
import { ReactComponent as IconGenresShooter } from "../assets/icon/genresshooter.svg";
import { ReactComponent as IconGenresAdventure } from "../assets/icon/genresadventure.svg";
import { ReactComponent as IconGenresPuzzle } from "../assets/icon/genrespuzzle.svg";
import { ReactComponent as IconGenresRacing } from "../assets/icon/genresracing.svg";
import { ReactComponent as IconGenresSport } from "../assets/icon/genressport.svg";
import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ProductContext } from "../context/ProductContext";

function SideBar() {
  const { dataWishlist, setDataUI, dataRatting, dataUI } =
    React.useContext(ProductContext);
  console.log("setDataUI", setDataUI, dataUI);
  const handlerWishList = () => {
    setDataUI(dataWishlist);
  };

  const handlerRatting = () => {
    setDataUI(dataRatting);
  };

  return (
    <Box>
      <Box>
        <H3Title>Filters</H3Title>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            onClick={handlerWishList}
          >
            <IconFiltersWishlist
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Wishlist</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            onClick={handlerRatting}
          >
            <IconFiltersRating
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Ratings</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconFiltersReviews
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Reviews</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>

      <Box>
        <H3Title>Genres</H3Title>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresAction
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Action</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresStrategy
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Strategy</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresRPG
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>RPG</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresShooter
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Shooter</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresAdventure
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Adventure</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresPuzzle
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Puzzle</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresRacing
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Racing</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
            <IconGenresSport
              style={{
                width: "39px",
                height: "43px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Sport</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>
    </Box>
  );
}

const ButtonSideBar = styled("div")({
  width: "270px",
  paddingTop: "10px",
  background: "#000",
  cursor: "pointer",
  display: "flex",
  "& svg": {
    backgroundColor: "rgb(45, 45, 45)",
  },
  "&:hover": {
    "& svg": {
      backgroundColor: "#fff",
      "& path": {
        fill: "#000",
      },
    },
  },
});

const H3Title = styled("h3")({
  color: "#fff",
  fontSize: "25px",
  letterSpacing: "1px",
  marginBottom: "22px",
  marginTop: "22px",
  whiteSpace: "nowrap",
});

const H3Text = styled("h3")({
  fontSize: "20px",
  cursor: "pointer",
  color: "#fff",
  whiteSpace: "nowrap",
});

export default SideBar;
