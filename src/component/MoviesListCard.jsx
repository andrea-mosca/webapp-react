import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieListCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data.movies));
  }, []);
  console.log(movies);
  return (
    <div className="container pt-5">
      <div className="row row-cols-2">
        {movies &&
          movies.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard {...movie} />
            </div>
          ))}
      </div>
    </div>
  );
}
