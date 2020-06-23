//functional component
import React from "react";

const DateInput = props => (
    <form onSubmit={props.changeDate}>
        <label className="col-form-label" htmlFor="inputLarge">Enter a date:</label>
        <div className="row">
        
            <div className="form-group col-md-8">                
                <input type="text" className="form-control form-control-lg" placeholder="YYYY-MM-DD"/>
                               
            </div>
            <div className="form-group col-md-4">
                <input type="submit" className="btn btn-lg btn-primary btn-block" value="Search"/>
            </div>
        </div>       
        
    </form>
  );
export default DateInput;