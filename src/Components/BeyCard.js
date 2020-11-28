import React from "react";


class BeyCard extends React.Component{


render(){
  let beyObj = this.props.beyObj
  console.log("BeyCards Props:", beyObj)
  return (
    <div className="card">
      <h2>{beyObj.name}</h2>
      <img alt="Beyonce" src={beyObj.img} />
    </div>
  );
}
};

export default BeyCard;
