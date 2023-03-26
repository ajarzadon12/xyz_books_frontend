import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Logo from 'src/assets/images/sample_logo.svg';
import ContactIcon from 'src/assets/images/contact_icon.svg';
import Facebook from 'src/assets/images/facebook.svg';
import Linkedin from 'src/assets/images/linkedin.svg';
import Twitter from 'src/assets/images/twitter.svg';
import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';

const Footer = (props) => {
  return (
    <div className="footer__container container mx-auto">
      <div className="menus-container">
        <div className="panels panel1">
          <div><Logo /></div>
          <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
          <div><TextInput placeholder="Email Address" Icon={ArrowForwardIosIcon} iconPosition="end" /></div>
        </div>
        <div className="panels panel2">
          <div className="main-title">Menu</div>
          <div><Button label="Shop All" type="link" /></div>
          <div><Button label="About Us" type="link" /></div>
          <div><Button label="Community" type="link" /></div>
          <div><Button label="FAQs" type="link" /></div>
        </div>
        <div className="panels panel3">
          <div className="main-title">Support</div>
          <div><Button label="Shipping & returns" type="link" /></div>
          <div><Button label="Help & FAQ" type="link" /></div>
          <div><Button label="Terms & Conditions" type="link" /></div>
          <div><Button label="Privacy Policy" type="link" /></div>
          <div><Button label="Contact" type="link" /></div>
          <div><Button label="Login" type="link" /></div>
        </div>
        <div className="panels panel4">
          <div className="main-title">Resources</div>
          <div><Button label="Shipping & returns" type="link" /></div>
          <div><Button label="Help & FAQ" type="link" /></div>
          <div><Button label="Terms & Conditions" type="link" /></div>
          <div><Button label="Privacy Policy" type="link" /></div>
          <div><Button label="Contact" type="link" /></div>
          <div><Button label="Login" type="link" /></div>
        </div>
        <div className="panels panel5">
          <div className="contact">
            <ContactIcon />
          </div>
        </div>
      </div>
      <div className="bottom-panel">
        <div>&#169;&nbsp;2023 Brainly</div>
        <div className="socials">
          <div className="social-icon">
            <Facebook />
          </div>
          <div className="social-icon">
            <Linkedin />
          </div>
          <div className="social-icon">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
