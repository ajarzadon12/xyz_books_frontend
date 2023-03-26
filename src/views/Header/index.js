import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

import Logo from 'src/assets/images/sample_logo.svg';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';

const Header = (props) => {
  return (
    <div className="header__container container mx-auto">
      <div>
        <Logo />
      </div>
      <div>
        <TextInput placeholder="Search" Icon={SearchIcon} />
      </div>
      <div className="buttons-container">
        <div>
          <Button label="Home" type="link" />
          <Button label="Rent Textbooks" type="link" />
          <Button label="Buy Textbooks" type="link" />
          <Button label="Sell Textbooks" type="link" />
        </div>
        <div className="vl"></div>
        <div>
          <Button label={<><span className="language-icon"><LanguageIcon /></span> En</>} type="link" />
          <Button label="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Header;
