import React, { Component } from "react";
import BeyCard from '../Components/BeyCard';

class Favorites extends React.Component {

  renderBey = () => {
    const beyArray = this.props.beyArray
    return beyArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>);
  }

  

  render() {
    console.log("FAVORITES PROPS:",this.props)
    // console.log(this.props.beyArray)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey()}
      </div>
    );
  }
}

export default Favorites;

