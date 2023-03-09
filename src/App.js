import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//import des COMPONENTS
import Header from "./components/Header";

//import des PAGES
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";

function App() {
  //LES STATES qui sont utilisés par plusieurs pages on les met dans App.js
  // et on les met en props aux pages et components
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token-vinted") || null);
  const [id, setId] = useState(Cookies.get("id_vinted") || null);

  //Fonction qui va stocker le token dans le state et dans les cookies ou le supprimer
  const handleTokenAndId = () => {
    if (token && id) {
      setToken(token);
      setId(id);
      Cookies.set("token-vinted", token, { expires: 14 });
      Cookies.set("id_vinted", id, { expires: 14 });
    } else {
      setToken(null);
      setId(null);
      Cookies.remove("token-vinted");
      Cookies.remove("id_vinted");
    }
  };

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        token={token}
        handleTokenAndId={handleTokenAndId}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup handleTokenAndId={handleTokenAndId} token={token} />}
        />
        <Route
          path="/login"
          element={<Login handleTokenAndId={handleTokenAndId} token={token} />}
        />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
