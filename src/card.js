import React from "react";
import london from "./london.jpg";
import Glasgow from "./Glasgow.jpg";
import manchester1 from "./manchester1.jpeg";
function TouristInfoCards() {
  return (
    <div id="allCard">
      <div className="card">
        <img src={london} className="card-img-top" id="london" />
        <div className="card-body">
          <p>
            London is the best city in the world , you can do anything there
            such as
          </p>
          <a href="#" className="btn btn-primary">
            Mor Information
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Glasgow} className="card-img-top" />
        <div className="card-body">
          <p>
            Glasgow is the best city in the world , you can do anything there
            such as
          </p>
          <a href="#" className="btn btn-primary">
            Mor Information
          </a>
        </div>
      </div>
      <div className="card">
        <img src={manchester1} className="card-img-top" />
        <div className="card-body">
          <p>
            Manchester is the best city in the world , you can do anything there
            such as
          </p>
          <a href="#" className="btn btn-primary">
            Mor Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
