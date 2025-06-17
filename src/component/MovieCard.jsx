import { Link } from "react-router";

export default function MovieCard({
  title,
  image,
  director,
  genre,
  abstract,
  release_year,
  link,
}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{director}</li>
          <li className="list-group-item">{genre}</li>
          <li className="list-group-item">{release_year}</li>
          <li className="list-group-item">{abstract}</li>
        </ul>
        <Link to={link} className="btn btn-primary">
          show details
        </Link>
      </div>
    </div>
  );
}
