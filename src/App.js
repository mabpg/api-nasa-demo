//Class component
import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import "bootswatch/dist/solar/bootstrap.min.css";

class App extends Component {
  state = {
    date: "",
    photo: ""   
  };

  dateSearch = (termino) => {   
    if(termino!=="rnd"){ //invocado desde el submit search
      this.setState({ date: termino });
      this.getPhoto(termino);
    }else {
      //invocado desde el submit random
      this.getRndPhoto();     
    } 
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    //console.log(date);
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  getRndPhoto = e => {
    fetch('http://localhost:8001/randomdate')
      .then(response => response.json())           
      .then(data => {
        this.setState({ date: data.rndDate })
        this.getPhoto(data.rndDate);        
      });
  };

  render() {
    return (
      <div className="apod container">
        <div className="jumbotron">
          <h1 className="text-white text-center">NASA's Astronomy Picture of the Day</h1>
          <DateInput dateSearch={this.dateSearch}/>
          <Photo photo={this.state.photo}/>
        </div>
      </div>
      
    );
  }
}
export default App;

