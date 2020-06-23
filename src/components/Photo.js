//functional component
import React from "react";
const Photo = props => (
  <div className="form-group col-md-12">
    <h2 className="text-center">{props.photo.title}</h2>
    <p className="text-center"> Image Credit &copy; Copyright  <b>{props.photo.copyright}</b></p>
    <img className="col-12 mb-4" src={props.photo.url} alt={props.photo.title} />
    <p className="px-2 pt-2 text-justify">{props.photo.explanation}</p>
    
  </div>
)
export default Photo;