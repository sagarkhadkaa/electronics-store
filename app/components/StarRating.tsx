import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles from '../styles/MyComponent.module.css';

interface StarRatingProps {
  rating: number;
  starColor: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, starColor }) => {
  const renderStars = () => {
    const stars = [];
    const wholeStars = Math.floor(rating);
    const hasHalfStar = rating - wholeStars >= 0.5;

    for (let i = 1; i <= wholeStars; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`${styles.yellow_gradient_text} text-sm md:text-xl`}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalfIcon
          key={wholeStars + 1}
          className={`${styles.yellow_gradient_text} text-sm md:text-xl`}
        />
      );
    }

    const remainingStars = 5 - wholeStars - (hasHalfStar ? 1 : 0);

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(
        <StarBorderIcon
          key={wholeStars + 1 + i}
          className={`${styles.yellow_gradient_text} text-sm md:text-xl`}
        />
      );
    }

    return stars;
  };

  return <div className='star-rating'>{renderStars()}</div>;
};

export default StarRating;
