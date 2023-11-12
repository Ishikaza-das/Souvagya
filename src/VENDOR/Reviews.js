import React, { useState } from 'react';

function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      const newReviewObject = {
        id: reviewsData.length + 1,
        user: 'Customer', // You can replace this with the actual user's name
        comment: newReview,
      };

      setReviewsData([...reviewsData, newReviewObject]);
      setNewReview('');
    }
  };

  return (
    <div className="reviews-section">
      <h3>Customer Reviews</h3>
      <ul>
        {reviewsData.map((review) => (
          <li key={review.id}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
      <div className="review-input">
        <input
          type="text"
          placeholder="Add your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAddReview}>Submit</button>
      </div>
    </div>
  );
}

export default Reviews;
