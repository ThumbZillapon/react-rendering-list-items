import "./App.css";
import movies from "./data/movies.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="movie-image">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-details">
              <p className="movie-title">Title: {movie.title}</p>
              <p className="movie-year">Year: {movie.year}</p>
              <p className="movie-runtime">Runtime: {movie.runtime}</p>
              <div className="movie-genres">
                <span className="genre-label">Genres: </span>
                {movie.genres.slice(0, 2).map((genre, genreIndex) => (
                  <span key={genreIndex} className="genre-tag">
                    {genre}
                  </span>
                ))}
              </div>
              <p className="movie-rating">IMDB Rating: {movie.imdbRating}</p>
              <p className="movie-votes">IMDB Votes: {movie.imdbVotes}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
