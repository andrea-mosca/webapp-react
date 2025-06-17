import MovieCard from "./MovieCard";

export default function MovieListCard() {
  return (
    <div className="container pt-5">
      <div className="row row-cols-2">
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
        <div className="col">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
