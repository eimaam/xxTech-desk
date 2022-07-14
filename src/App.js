import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./components/nav";
import Home from "./Home";


function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}

export default App;
