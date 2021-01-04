import React from "react";

const BeyCard = (props) => {

  // thunk is a function wrapped inside another function to delay it's execution
  function localClickHandler() {
    props.clickHandler(props.beyObj.id)
  }

  return (
    <div className="card">
      <h1>{props.beyObj.name}</h1>
      <img alt="beyonce" src={props.beyObj.img} onClick={localClickHandler} />
    </div>
  );
};

export default BeyCard;