import bgHome from "../assets/images/backgroundHome.mp4";
import iconHeadHome from "../assets/icon/headgame.svg";
import iconHeadStore from "../assets/icon/headstore.svg";
import iconBodyBrowse from "../assets/icon/bodybrowse.svg";
import iconBodyPlayDice from "../assets/icon/bodyplaydice.svg";
import iconBodyGithub from "../assets/icon/bodygithub.svg";
import iconBodyLinkedLn from "../assets/icon/bodylinkedln.svg";
import iconSidebarGame from "../assets/icon/sidegame.svg";
import iconSidebarEroPage from "../assets/icon/sideeropage.svg";
import iconSidebarEroQuery from "../assets/icon/sideeroquery.svg";
import iconSidebarCommit from "../assets/icon/sidecommit.svg";
import iconSidebarPerfor from "../assets/icon/sideperfor.svg";
import iconSidebarTechnologies from "../assets/icon/sidetechnologies.png";
import iconSidebarOurSouce from "../assets/icon/sideoursouce.svg";
import UserCart from "../components/UserCart";
import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          minHeight: "100%",
          minWidth: "100%",
          right: "0",
          bottom: "0",
          padding: "none",
          overflow: "hidden",
        }}
      >
        <video autoPlay loop muted>
          <source type="video/mp4" src={bgHome} />
        </video>
      </Box>

      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ gap: "30px" }}>
            <Link to="/404" style={{ textDecoration: "none" }}>
              <Button
                sx={{ textTransform: "none", color: "#fff", gap: "18px" }}
              >
                <IconRoute alt="icon" src={iconHeadHome} />
                <H3Route>Game Store</H3Route>
              </Button>
            </Link>
            <Link to="/store" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  gap: "18px",
                  marginLeft: "50px",
                }}
              >
                <IconRoute alt="icon" src={iconHeadStore} />
                <H3Route>Browse Store</H3Route>
              </Button>
            </Link>
          </Box>
          <UserCart />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 1,
          width: 1,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box mt={"44px"}>
          <Box
            ml={"44px"}
            sx={{
              height: "240px",
              maxWidth: "630px",
              padding: "22px 35px 55px 50px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: "90px",
                whiteSpace: "nowrap",
                fontWeight: "700",
              }}
            >
              Game Store
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff", fontSize: "19px" }}>
              The best destination to buy new games to competitive prices. 24
              hour support, "best price" guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our&nbsp;
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#45c1bc",
                  cursor: "pointer",
                  fontSize: "19px",
                  display: "inline-block",
                }}
              >
                careers
              </Typography>
            </Typography>
          </Box>
          <Box
            ml={"44px"}
            mt={"20px"}
            sx={{
              height: "70px",
              maxWidth: "630px",
              padding: "14px 20px 15px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ButtonRoute>
              <Button href="/" sx={{ textTransform: "none", gap: "12px" }}>
                <Icon alt="icon" src={iconBodyBrowse} />
                <H3Text>Browse</H3Text>
              </Button>
            </ButtonRoute>
            <ButtonRoute>
              <Button href="/" sx={{ textTransform: "none", gap: "12px" }}>
                <Icon alt="icon" src={iconBodyPlayDice} />
                <H3Text>Play Dice</H3Text>
              </Button>
            </ButtonRoute>
            <ButtonRoute>
              <Button
                href="https://github.com/gianlucajahn/react-ecommerce-store"
                sx={{ textTransform: "none", gap: "12px" }}
              >
                <Icon alt="icon" src={iconBodyGithub} />
                <H3Text>Github</H3Text>
              </Button>
            </ButtonRoute>
            <ButtonRoute>
              <Button
                href="https://www.linkedin.com/in/gianlucajahn/"
                sx={{ textTransform: "none", gap: "12px" }}
              >
                <Icon alt="icon" src={iconBodyLinkedLn} />
                <H3Text>Linkedln</H3Text>
              </Button>
            </ButtonRoute>
          </Box>
        </Box>

        <Box
          mt={"44px"}
          mr={"40px"}
          sx={{
            height: "400px",
            maxWidth: "280px",
            padding: "22px 30px 30px",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(250,250,250, 0.285)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "26px",
              marginBottom: "14px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Quick Navigation
          </Typography>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarGame} />
              <H3Text>Game Page</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarEroPage} />
              <H3Text>404 Page</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarEroQuery} />
              <H3Text>404 Query</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarCommit} />
              <H3Text>Commit Log</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarPerfor} />
              <H3Text>Performance</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarTechnologies} />
              <H3Text>Technologies</H3Text>
            </Button>
          </ButtonSideBar>
          <ButtonSideBar>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={iconSidebarOurSouce} />
              <H3Text>OurSouce</H3Text>
            </Button>
          </ButtonSideBar>
        </Box>
      </Box>
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

const Icon = styled("img")({
  width: "18px",
  height: "18px",
});

const H3Text = styled("h3")({
  color: "#000",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

const ButtonRoute = styled("button")({
  width: "135px",
  height: "40px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 28px",
  transition: "all .3s",
  "&:hover": {
    background: "#45c1bc",
  },
});

const ButtonSideBar = styled("button")({
  width: "215px",
  height: "40px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 28px",
  transition: "all .3s",
  "&:hover": {
    background: "#45c1bc",
  },
});

export default Home;