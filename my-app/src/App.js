import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Pages/MainPage/Main";
import Game from "./Pages/GamePage/Game";
import Error from "./Pages/ErrorPage/Error";
import logo from "./images/logo.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <NavLink to="/">
            {" "}
            <img src={logo}></img>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
            to="/game"
          >
            Card game
          </NavLink>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/game" element={<Game />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
