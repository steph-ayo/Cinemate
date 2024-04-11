import "animate.css";

export default function NumResults({ movies }) {
  return (
    <p className="num-results animate__animated animate__bounce">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
