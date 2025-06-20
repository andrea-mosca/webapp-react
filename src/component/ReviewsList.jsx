export default function ReviewsList({ reviews }) {
  return (
    <div>
      <h3 className="mt-5">Reviews:</h3>
      <div className="row row-cols-2">
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
    </div>
    // <div className="mt-5">
    //   <h3 className="mb-4">Reviews:</h3>
    //   <div className="row row-cols-1 row-cols-md-2 g-4">
    //     {reviews.map((review) => (
    //       <div className="col" key={review.id}>
    //         <div className="card h-100 shadow-sm">
    //           <div className="card-body">
    //             <h5 className="card-title">
    //               <i className="bi bi-person-circle me-2"></i>
    //               {review.reviewed_name}
    //             </h5>
    //             <h6 className="card-subtitle mb-2 text-muted">
    //               Vote: {review.review_vote} / 5
    //             </h6>
    //             <p className="card-text">"{review.review_text}"</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
