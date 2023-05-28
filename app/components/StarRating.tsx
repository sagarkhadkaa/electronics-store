import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import styles from '../styles/MyComponent.module.css';

interface StarRatingProps {
  rating: number;
  starColor: string;
}

const styles = {
  fontSize: '0.875rem',
  '@media (min-width: 640px)': {
    fontSize: '1.25rem',
  },
};

const StarRating: React.FC<StarRatingProps> = ({ rating, starColor }) => {
  const renderStars = () => {
    const stars = [];
    const wholeStars = Math.floor(rating);
    const hasHalfStar = rating - wholeStars >= 0.5;

    for (let i = 1; i <= wholeStars; i++) {
      stars.push(<StarIcon key={i} style={styles} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalfIcon key={wholeStars + 1} style={styles} />);
    }

    const remainingStars = 5 - wholeStars - (hasHalfStar ? 1 : 0);

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(<StarBorderIcon key={wholeStars + 1 + i} style={styles} />);
    }

    return stars;
  };

  return <div className='star-rating'>{renderStars()}</div>;
};

export default StarRating;
