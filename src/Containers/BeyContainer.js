import React from "react";
import BeyCard from '../Components/BeyCard'

function BeyContainer(props) {

  function renderBeyCards() {
    return props.beyArray.map(beyEl => <BeyCard key={beyEl.id} beyObj={beyEl} clickHandler={props.clickHandler} />)
  }

  return (
    <div className="index">
      <h1>Index</h1>
      {renderBeyCards()}
    </div>
  );

}

export default BeyContainer;
