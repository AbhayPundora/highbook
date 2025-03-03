import React, { useState } from "react";
import Book1 from "../assets/book.png";
import Book2 from "../assets/book2.png";
import Book3 from "../assets/book3.png";
import Book4 from "../assets/book4.png";
import Book5 from "../assets/book5.png";
import Book6 from "../assets/book6.png";
import Book7 from "../assets/book7.png";
import Book8 from "../assets/book8.png";
import Like from "../assets/like.png";
import Rating from "../assets/rating.png";
import Cart from "../assets/cart.svg";
import PropTypes from "prop-types";

const bookCover = [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8];

const Main = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState(0);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div className="grid-container">
        {bookCover.map((book, i) => (
          <GridItem
            source={book}
            key={i}
            onIsOpen={handleIsOpen}
            collection={collection}
          />
        ))}
      </div>
      {isOpen && (
        <div className="popUp">
          <button onClick={handleIsOpen}>X</button>
          <div className="cover">
            <img src={Book1} alt="book image" />

            <ul className="book-details">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <input type="text" value=" hey hello there" />
        </div>
      )}
    </>
  );
};

const GridItem = ({ source, onIsOpen, collection }) => {
  return (
    <div className="grid-item" onClick={onIsOpen}>
      <div className="grid-img-container">
        {source ? <img src={source} alt="book image" /> : <span>No image</span>}
      </div>
      <div className="stats">
        <ul>
          {!collection && (
            <li
              style={{
                width: "41px",
                height: "37px",
                border: "1px solid black",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></li>
          )}

          <li>
            <img src={Like} alt="like image" />
          </li>
          <li>
            <img src={Rating} alt="like image" />
          </li>
          {!collection && (
            <li>
              <img src={Cart} alt="like image" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};



GridItem.propTypes = {
  source: PropTypes.string,
};
export default Main;