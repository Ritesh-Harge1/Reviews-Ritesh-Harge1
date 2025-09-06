import React, { useState } from "react";
import reviews from "../data";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  // helper to wrap around
  const checkNumber = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((i) => checkNumber(i + 1));
  };

  const prevPerson = () => {
    setIndex((i) => checkNumber(i - 1));
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % reviews.length;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 className="author" id={`author-${id}`}>
        {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          prev
        </button>
        <button className="next-btn" onClick={nextPerson}>
          next
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

export default Review;
