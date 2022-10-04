import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Store() {
  return (
    <Box
      sx={{
        paddingTop: "85px",
        paddingRight: "40px",
        backgroundColor: "#000",
        display: "flex",
      }}
    >
      <SideBar />
      <Outlet />
    </Box>
  );
}

export default Store;
