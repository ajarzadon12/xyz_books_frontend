import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { isNil, reduce } from 'lodash';

import { searchBook } from 'src/reducers/booksSlice';


const ShowBook = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchResult: book = {}, searchStatus, message } = useSelector((state) => state.books);
  const { id } = router.query;

  const {
    title, isbn_13, list_price, publication_year,
    edition, authors, publisher, image_url = '',
  } = book;

  const convertIsbn10to13 = (isbn10, checkVal) => {
    const newVal = `978${checkVal}`.slice(0, -1);
    
    const checksum = reduce(newVal.split(''), (sum, val, idx) => {
      const mult = ((idx % 2) === 0) ? 1 : 3;
      return sum + (val * mult);
    }, 0);

    const lastNum = 10 - (checksum % 10);
    return `978-${isbn10.replace(/.$/,lastNum)}`;
  };

  useEffect(() => {
    if (!isNil(id)) {
      const checkVal = id.replace(/-/g, "").trim();
      if (checkVal.length === 13) {
        dispatch(searchBook({ isbn13: id }));
      } else {
        const newId = convertIsbn10to13(id, checkVal);
        dispatch(searchBook({ isbn13: newId }));
      }
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (searchStatus === 'failed') {
      alert('Search failed. Please check your ISBN.');
    }
  }, [searchStatus, message])

  return (
    <div className="book__container container mx-auto">
      <div className="main-title">Search Result</div>
      <div className="panels">
        <div className="panel1">
          <img src={image_url} alt={title} />
        </div>
        <div className="panel2">
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
          <div className="book-info">
            Edition: <span className="book-info-val">{edition}</span>
          </div>
          <div className="book-info">
            Price: <span className="book-info-val">{list_price}</span>
          </div>
          <div className="book-info">
            ISBN: <span className="book-info-val">{isbn_13}</span>
          </div>
          <div className="book-info">
            Publication Year: <span className="book-info-val">{publication_year}</span>
          </div>
          <div className="book-info">
            Publisher: <span className="book-info-val">{publisher}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
