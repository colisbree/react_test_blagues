import logo from "./logo.svg";
import "./App.css";
import "./components/style.css";
import "./components/Pages/BlaguePage";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import BlaguePage from "./components/Pages/BlaguePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blague" element={<BlaguePage />} />
      </Routes>
    </Router>
  );
}

export default App;
