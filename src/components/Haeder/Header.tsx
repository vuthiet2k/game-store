import { useState } from "react";

import UserCart from "../UserCaet/UserCart";
import iconHeadHome from "../../assets/icon/headgame.svg";
import SearchHead from "../../assets/icon/headersearch.svg";
import { AppBar, Button, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <AppBar sx={{ backgroundColor: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ gap: "30px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "none", color: "#fff", gap: "18px" }}>
              <IconRoute alt="icon" src={iconHeadHome} />
              <H3Route>Game Store</H3Route>
            </Button>
          </Link>
        </Box>
        <Box sx={{ height: "35px" }} id="hoahoa">
          <InputSearch placeholder="Search games..." />
          <Button type="submit">
            <IconRoute src={SearchHead} alt="icon" />
          </Button>
        </Box>
        <UserCart />
      </Toolbar>
    </AppBar>
  );
}

const InputSearch = styled("input")({
  width: "470px",
  height: "100%",
  borderRadius: "8px",
  backgroundColor: "#262626",
  border: "1px transparent",
  outline: "none",
  paddingLeft: "18px",
  transition: "all .3s",
  color: "#fff",
});

const IconRoute = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default Header;
