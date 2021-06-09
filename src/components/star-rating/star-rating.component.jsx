import React, {useState} from 'react';

import { 
    StarContainer,
    StarElement 
} from './star-rating.styles';

const StarRating = ({ value }) => {
    const [rating] = useState(parseInt(value) || 0);
    const [selection] = useState(0);

    const Star = ({ marked, starId }) => (
        <StarElement data-star-id={starId} className="star" role="button">
            {marked ? '\u2605' : '\u2606'}
        </StarElement>
    )
  
    return (
      <StarContainer>
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </StarContainer>
    );
};

export default StarRating;