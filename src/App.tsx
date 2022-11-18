import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PlayLists } from "./pages/Playlists";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/playlists">Playlists</Link>
              </li>
              <li>
                <Link to="/login">Log-in</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/playlists" element={<PlayLists />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
