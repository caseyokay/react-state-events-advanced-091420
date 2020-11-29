import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer';
import Favorites from './Containers/Favorites';
import api from './api';


class App extends React.Component{

  state =  {
    api
  }

  addToFav = (id) => {
    // console.log("Obect id", id);
    // pull from api that matches the object id
    let newBeyArray = [...this.state.api];
    let foundObj = newBeyArray.find(element => element.id === id);
    console.log("Grabbed from New Array:", foundObj);
    foundObj.favorite = true;
    // or set it = !foundObj.favorite
    this.setState({api: newBeyArray});
  }

  removeFromFav = (id) => {
    let newBeyArray = [...this.state.api];
    let foundObj = newBeyArray.find(element => element.id === id);
    console.log("Grabbed from New Array:", foundObj);
    foundObj.favorite = false;
    // or set it = !foundObj.favorite
    this.setState({api: newBeyArray});
  }

  findFavorites = () => {
    return this.state.api.filter(element => element.favorite);
  }

  render(){ 
    // console.log(this.state) 
    // console.log(this.state.api) 

    return (
    <div className="container" >
      <BeyContainer beyArray={this.state.api} clickHandler={this.addToFav}/>
      <Favorites beyArray={this.findFavorites()} clickHandler={this.removeFromFav}/>
    </div>
  );
}
};

export default App;
