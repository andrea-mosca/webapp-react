import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../component/ReviewForm";

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
    <div className="container mt-5">
      <h1>Title: {movieDetails.title}</h1>
      <div className="d-flex gap-5">
        <img
          className="img-details-page"
          src={`http://localhost:3000/movies_cover/${movieDetails.image}`}
        />
        <div>
          <div>Release year: {movieDetails.release_year}</div>
          <div>Director: {movieDetails.director}</div>
          <div>Description: {movieDetails.abstract}</div>
          <div>Genre: {movieDetails.genre}</div>
          <ReviewForm />
        </div>
      </div>
      <div>
        <h3 className="mt-5">Reviews:</h3>
        {movieDetails.reviews &&
          movieDetails.reviews.map((review) => (
            <div key={review.id}>
              <ul className="list-group mb-5">
                <li className="list-group-item">
                  <strong>Utent name:</strong> {review.reviewed_name}
                </li>
                <li className="list-group-item">
                  <strong>Comment:</strong> "{review.review_text}"
                </li>
                <li className="list-group-item">
                  <strong>Review vote:</strong> {review.review_vote}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
