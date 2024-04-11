import "animate.css";
import Search from "./Search";
import NumResults from "./NumResults";
import "./navbar.css";

export default function NavBar({ query, setQuery, movies }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img" class="animate__animated animate__bounce">
          🍿
        </span>
        <h1 class="animate__animated animate__bounce">Cinemate</h1>
      </div>
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
}
