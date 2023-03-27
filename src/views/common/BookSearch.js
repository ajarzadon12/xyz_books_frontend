import React, {useState} from "react";
import { useRouter } from 'next/router'
import { reduce } from 'lodash';

import TextInput from 'src/components/TextInput';

const BookSearch = (props) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const onKeyDown= (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();

      const checkVal = searchText.replace(/-/g, "").trim();
      if (checkIsbn13(checkVal) || checkIsbn10(checkVal)) {
        router.push(`/books/${searchText}`);
      } else {
        alert('ISBN is invalid.');
      }
    }
  };

  const checkIsbn10 = (checkVal) => {
    if (checkVal.length !== 10) return false;

    const checksum = reduce(checkVal.split('').reverse(), (sum, val, idx) => {
      return sum + (val * (idx + 1));
    }, 0);
    return (checksum % 11) === 0;
  };

  const checkIsbn13 = (checkVal) => {
    if (checkVal.length !== 13) return false;

    const checksum = reduce(checkVal.split(''), (sum, val, idx) => {
      const mult = ((idx % 2) === 0) ? 1 : 3;
      return sum + (val * mult);
    }, 0);
    return (checksum % 10) === 0;
  };

  const onValueChange = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <TextInput onKeyDown={onKeyDown} onChange={onValueChange} {...props} />
  );
};

export default BookSearch;
