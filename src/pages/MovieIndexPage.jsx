import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieIndexPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovieDetails(res.data));
  }, [id]);
  console.log(movieDetails.reviews);
  return (
    <div className="container">
      <div className="d-flex gap-5">
        <img
          className="img-details-page"
          src={`http://localhost:3000/movies_cover/${movieDetails.image}`}
        />
        <div>
          <h1>Title: {movieDetails.title}</h1>
          <div>Release year: {movieDetails.release_year}</div>
          <div>Director: {movieDetails.director}</div>
          <div>Description: {movieDetails.abstract}</div>
          <div>Genre: {movieDetails.genre}</div>
        </div>
      </div>
      <div>
        {movieDetails.reviews &&
          movieDetails.reviews.map((review) => (
            <div>
              <div>{review.reviewed_name}</div>
              <div>{review.review_vote}</div>
              <div>{review.review_text}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
