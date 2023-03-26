import React from "react";
import { map } from 'lodash';

import Package from 'src/assets/images/package_box.svg';
import Help from 'src/assets/images/help.svg';
import Piggy from 'src/assets/images/piggy_bank.svg';
import BinanceLogo from 'src/assets/images/binance_colored.svg';
import Star from 'src/assets/images/star.svg';
import Doughnuts from '../../assets/images/doughnuts_doom.png';
import BendLuck from '../../assets/images/bend_of_luck.png';
import Underwater from '../../assets/images/underwater_welder.png';
import BookCard from "./BookCard";

const Banner2 = (props) => {

  const books = [
    {id: 1, title: 'Doughnuts and Doom', imageUrl: Doughnuts.src},
    {id: 2, title: 'The Bend of Luck', imageUrl: BendLuck.src},
    {id: 3, title: 'The Underwater Welder', imageUrl: Underwater.src},
  ];

  return (
    <div className="banner2__container">
      <div className="banner2__part1">
        <div className="main-title">Explore Our Books</div>
        <div className="description">With our dedicated customer support team, you can rest easy knowing that we’re doing everything we can to save you time, money, and stress.</div>
      </div>
      <div className="banner2__part2">
        {
          map(books, (book) => (
            <div>
              <BookCard {...book} />
            </div>
          ))
        }
      </div>
      <div className="banner2__part3">
        <div className="container mx-auto">
          <div className="sub-title">LOREM IPSUM</div>
          <div className="main-title">3 Reasons To Shop With Us</div>
          <div className="list">
            <div>
              <div><Package /></div>
              <div className="title">All textbook rentals come with free return shipping.</div>
              <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd gubergren, no sea takimata.</div>
            </div>
            <div>
              <div><Help /></div>
              <div className="title">Dedicated customer support and help portal.</div>
              <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd gubergren, no sea takimata.</div>
            </div>
            <div>
              <div><Piggy /></div>
              <div className="title">Buy or rent cheap textbooks & save up to $500 per year!</div>
              <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd gubergren, no sea takimata.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner2__part4">
        <div className="name">Andrew Santellan</div>
        <div className="designation">Product Manager, Binance</div>
        <div className="company"><BinanceLogo />&nbsp;Binance</div>
        <div className="comment-card">
        <div className="img-container"></div>
        <div className="comment">
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <div className="rating"><Star /></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner2;
