import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import HeroIllustration from 'src/assets/images/hero_illustration.svg';
import BinanceLogo from 'src/assets/images/binance.svg';
import BitcoinLogo from 'src/assets/images/bitcoin.svg';
import SolanaLogo from 'src/assets/images/solana.svg';
import EthereumLogo from 'src/assets/images/ethereum.svg';
import TetherLogo from 'src/assets/images/tether.svg';
import XrpLogo from 'src/assets/images/xrp.svg';
import Button from 'src/components/Button';

const Banner1 = (props) => {
  return (
    <div className="banner1__container">
      <div className="container mx-auto">
        <div className="banner1__part1">
          <div className="left">
            <div className="main-title">The Cheapest Textbooks</div>
            <div className="sub-title">Save Up To 90% On Millions Of Titles</div>
            <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</div>
            <div>
              <Button label={<>Get Started <KeyboardArrowRightIcon /></>} />
            </div>
          </div>
          <div className="right">
            <HeroIllustration />
          </div>
        </div>
        <div className="banner1__part2">
          <div className="left">
            <div className="group_image"></div>
          </div>
          <div className="right">
            <div className="main-title">Our Commitment</div>
            <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
            <div>
              <Button label={<>Learn More <KeyboardArrowRightIcon /></>} color="dark" />
            </div>
          </div>
        </div>
        <div className="banner1__part3">
          <div className="main-title">Trusted By Awesome <span className="font-yellow">Clients</span></div>
          <div className="partners">
            <div><BinanceLogo />&nbsp;Binance</div>
            <div><BitcoinLogo />&nbsp;Bitcoin</div>
            <div><SolanaLogo />&nbsp;Solana</div>
            <div><EthereumLogo />&nbsp;Ethereum</div>
            <div><TetherLogo />&nbsp;Tether</div>
            <div><XrpLogo />&nbsp;XRP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
