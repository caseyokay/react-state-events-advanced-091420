import React from "react";


class BeyCard extends React.Component{

localClickHandler = () => {
  let clickHandler = this.props.clickHandler
  let beyObj = this.props.beyObj
  console.log("Toggling Favorites:", beyObj.id)
  clickHandler(beyObj.id)
}


render(){
  let beyObj = this.props.beyObj
  // console.log("BeyCards Props:", beyObj)
  return (
    <div className="card" onClick={this.localClickHandler}>
      <h2>{beyObj.name}</h2>
      <img alt="Beyonce" src={beyObj.img} />
    </div>
  );
}
};

export default BeyCard;
