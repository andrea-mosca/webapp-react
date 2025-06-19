export default function ReviewForm() {
  return (
    <div className="mt-5">
      <h2>Add your review</h2>
      <form className="text-bg-dark p-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your name:
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Your vote:
          </label>
          <input
            type="number"
            className="form-control"
            id="vote"
            min="1"
            max="5"
          />
        </div>
        <div className="mb-3">
          <label for="text-review" className="form-label">
            Your review:
          </label>
          <textarea className="form-control" id="text-review"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
