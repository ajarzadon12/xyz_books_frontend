import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Button from 'src/components/Button';

const BookCard = (props) => {
  const { id, title, imageUrl } = props;

  const goToBook = () => {};

  return (
    <div>
      <div className="book-card__img-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="book-card__title">{title}</div>
      <div className="book-card__btn-container">
        <Button label={<>View Book Details <KeyboardArrowRightIcon /></>} type="link" onClick={goToBook} />
      </div>
    </div>

  );
};

export default BookCard;
