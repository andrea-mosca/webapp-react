import { Link } from "react-router";

export default function MovieCard({
  title,
  image,
  director,
  genre,
  abstract,
  release_year,
  id,
}) {
  return (
    <div className="card border border-danger h-100">
      <img src={image} className="card-img-top h-100" alt={title} />
      <div className="card-body text-bg-dark">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-bg-dark">
            <strong>Director: </strong>
            {director}
          </li>
          <li className="list-group-item text-bg-dark">
            <strong>Genre: </strong>
            {genre}
          </li>
          <li className="list-group-item text-bg-dark">
            <strong>Release year: </strong>
            {release_year}
          </li>
          <li className="list-group-item text-bg-dark">
            <strong>Description: </strong>
            {abstract}
          </li>
        </ul>
        <Link to={`/movie/${id}`} className="btn btn-danger">
          show details
        </Link>
      </div>
    </div>
  );
}
