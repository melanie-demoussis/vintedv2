import { Link } from "react-router-dom";

const Header = ({ search, setSearch, token, handleTokenAndId }) => {
  return (
    <header>
      <div className="header">
        <h1>Bienvenue sur Vinted</h1>
        <div>
          <input
            value={search}
            type="text"
            placeholder="Recherche des articles"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {token ? (
          <button
            onClick={() => {
              handleTokenAndId(null, null);
            }}
          >
            Se Déconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
            <Link to="/publish">Vends tes articles</Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
