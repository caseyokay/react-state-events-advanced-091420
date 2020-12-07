import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {
  
  renderBey = () => {
    const beyArray = this.props.beyArray
    return beyArray.map(beyObj => <BeyCard clickHandler={this.props.clickHandler} key={beyObj.id} beyObj={beyObj}/>);
  }
  

  render() {
    console.log(this.props)
    // console.log(this.props.beyArray)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey()}
      </div>
    );
  }
}

export default BeyContainer;
