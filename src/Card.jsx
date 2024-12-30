import React from "react";

function Card(props){
    return (
      <div className="card" id='div1'>
    <img className="card-img-top" src={props.img1} alt="Card image" style={{height:200}} />
    <div className="card-body">
      <h4 className="card-title" style={{fontSize:20}}>{props.name1} </h4>
      <p className="card-text">{props.dis}</p>
      <a href={props.vid} className="btn btn-primary">Watch Now</a>
    </div>
  </div>
    );
  }
  export default Card;