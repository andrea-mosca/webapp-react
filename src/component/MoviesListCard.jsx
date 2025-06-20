import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoader } from "../context/LoaderContext";
export default function MovieListCard() {
  const [movies, setMovies] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data.movies))
      .finally(() => hideLoader());
  }, []);

  return (
    <div className="container pt-5">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies &&
          movies.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard
                {...movie}
                image={`http://localhost:3000/movies_cover/${movie.image}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
