export default function ReviewsList({ reviews }) {
  return (
    <div>
      <h3 className="mt-5">Reviews:</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <ul className="list-group mb-5 border border-danger">
              <li className="list-group-item text-bg-dark border border-danger">
                <strong>Utent name:</strong> {review.reviewed_name}
              </li>
              <li className="list-group-item text-bg-dark border border-danger">
                <strong>Comment:</strong> "{review.review_text}"
              </li>
              <li className="list-group-item text-bg-dark border border-danger">
                <strong>Review vote:</strong> {review.review_vote}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
