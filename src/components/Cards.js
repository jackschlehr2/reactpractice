import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img_2 from "../images/img-2.jpg";
import img_9 from "../images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>This is where the cards will be</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={img_9}
              text="This is where the text prop will be sent in"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img_2}
              text="This is another picture"
              label="Adventure2"
              path="/services"
            />
            <CardItem
              src={img_9}
              text="This is where the text prop will be sent in"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
