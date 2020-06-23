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

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value; //date del state
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);    
  };

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

   
  render() {
    return (
      <div className="apod container">
        <div className="jumbotron">
          <h1 className="text-white text-center">NASA's Astronomy Picture of the Day</h1>
          <DateInput changeDate={this.changeDate}/>
          <Photo photo={this.state.photo}/>
        </div>
      </div>
      
    );
  }
}
export default App;

