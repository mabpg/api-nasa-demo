//Class component
import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import "bootswatch/dist/solar/bootstrap.min.css";

class App extends Component {
  state = {
    date: "",
    photo: "",
    rndDate: ""
  };

  dateSearch = (termino) => {
    //console.log("termino recibido: " + termino);
    if(termino!=="rnd"){ //invocado desde el submit search
      this.setState({ date: termino });
      this.getPhoto(termino);
    }else {
      //invocado desde el submit random
      this.getRndPhoto();
      console.log("Invoke from Random " + this.state.rndDate)
    } 
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=9maQXMYRXnmlPmw5qc2L78HaDaw2zEdb4MSMBstG')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=9maQXMYRXnmlPmw5qc2L78HaDaw2zEdb4MSMBstG`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  getRndPhoto = e => {
    fetch('http://localhost:8001/randomdate')
      .then(response => response.json())
      .then(rndDate => this.setState({ rndDate: rndDate }));
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

