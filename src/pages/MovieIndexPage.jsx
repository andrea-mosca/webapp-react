import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../component/ReviewForm";
import { useLoader } from "../context/LoaderContext";
import ReviewsList from "../component/ReviewsList";

export default function MovieIndexPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  const fetchMovie = () => {
    showLoader();
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovieDetails(res.data))
      .finally(() => hideLoader());
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div className="container mt-5">
      <h1>Title: {movieDetails.title}</h1>
      <div className="d-flex">
        <div>
          <img
            className="img-details-page"
            src={`http://localhost:3000/movies_cover/${movieDetails.image}`}
          />
          <div>
            <div>
              <strong>Release year:</strong> {movieDetails.release_year}
            </div>
            <div>
              <strong>Director:</strong> {movieDetails.director}
            </div>
            <div>
              <strong>Description:</strong> {movieDetails.abstract}
            </div>
            <div>
              <strong>Genre: </strong>
              {movieDetails.genre}
            </div>
          </div>
        </div>
        <div className="flex-grow-1">
          <ReviewForm movieId={id} onReviewSubmitted={fetchMovie} />
        </div>
      </div>
      <ReviewsList reviews={movieDetails.reviews} />
    </div>
  );
}
