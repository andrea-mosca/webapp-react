import { useState } from "react";

const formInitialData = {
  name: "",
  vote: 1,
  text: "",
};
export default function ReviewForm() {
  const [formData, setFormData] = useState(formInitialData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5">
      <h2>Add your review</h2>
      <form className="text-bg-dark p-3" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your name:
          </label>
          <input
            onChange={handleInputChange}
            value={formData.name}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Your vote:
          </label>
          <input
            onChange={handleInputChange}
            value={formData.vote}
            type="number"
            className="form-control"
            id="vote"
            name="vote"
            min="1"
            max="5"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Your review:
          </label>
          <textarea
            onChange={handleInputChange}
            value={formData.text}
            className="form-control"
            id="text"
            name="text"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
