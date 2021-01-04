import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import api from './api.js'
import Favorites from "./Containers/Favorites";



class App extends React.Component {
  state = {
    beyArray: api
  }

  addToFavorites = (beyObjID) => {
    const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjID)
    foundObj.favorite = true
    this.setState({beyArray: newBeyArray})
    console.log("found Object:", foundObj)
  }

  removeFromFavorites = (beyObjID) => {
    const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjID)
    foundObj.favorite = false
    this.setState({beyArray: newBeyArray})
    alert("I got hot sauce in my bag, swag")
  }

  allFavoriteBeys = () => {
    return this.state.beyArray.filter(beyEl => beyEl.favorite === true)
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.beyArray} clickHandler={this.addToFavorites} />
        <Favorites beyArray={this.allFavoriteBeys()} clickHandler={this.removeFromFavorites} />
      </div>
    );
  }


};

export default App;
