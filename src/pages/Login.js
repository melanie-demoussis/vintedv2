import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ handleTokenAndId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      if (response.data.token) {
        Cookies.set("token-vinted", response.data.token, { expires: 14 });
        handleTokenAndId(response.data.token, response.data._id);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <h1>Se connecter</h1>
      <form onSubmit={handleLogin}>
        <input
          value={email}
          type="email"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Se connecter</button>
        <Link to="/signup">Pas encore de compte ? Inscris-toi</Link>
      </form>
    </div>
  );
};
export default Login;
