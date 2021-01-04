import React, { Component } from "react";
import BeyCard from  '../Components/BeyCard'

function Favorites(props){
  
  function renderBeyCards() {
    return props.beyArray.map(beyEl => <BeyCard key={beyEl.id} beyObj={beyEl} clickHandler={props.clickHandler} />)
  }

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {renderBeyCards()}
      </div>
    )
}
export default Favorites