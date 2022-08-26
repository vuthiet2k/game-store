import "./App.scss";
import { publicRoutes } from "./routes/Router";
import { RouteType } from "./routes/Router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/games/Game";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: RouteType, index: number) => {
            const Page = route.components;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
        <Routes>
        <Route path="store/">
        <Route path=":productID" element={<Game />} />
      </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
