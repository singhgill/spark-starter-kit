import React from 'react';
import './Reviews.css';

const reviews = [
  { name: 'Madhur Joshi', review: 'Amazing event platform!' },
  { name: 'Nikhil Singhania', review: 'Loved the experience!' },
  { name: 'Rishab Malhotra', review: 'Value for money' },
  { name: 'Pahul Preet', review: 'Great Job' },
  { name: 'Akshit Verma', review: 'You guys are doing well' },
];

function Review() {
  return (
    <div className="review-section">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p>{review.review}</p>
          <p>- {review.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;
