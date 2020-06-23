//Class component
import React, { Component } from "react";

class DateInput extends Component {

    searchRef = React.createRef();

    changeSearchDate = (e) => {
        e.preventDefault();
        
        const termino = this.searchRef.current.value;
        this.props.dateSearch(termino);
    };

    changeRndDate = (e) => {
        e.preventDefault();  
        this.props.dateSearch("rnd");        
    };

    render() {
        return (
            <form onSubmit={this.changeSearchDate}>
                <label className="col-form-label" htmlFor="inputLarge">Enter a date:</label>
                <div className="row">                
                    <div className="form-group col-md-8">                
                        <input type="date" ref={this.searchRef} id="fecha" className="form-control form-control-lg" placeholder="YYYY-MM-DD"/>
                                    
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Search"/>
                    </div>
                    <div className="form-group col-md-2" >
                        <input type="submit" onClick={this.changeRndDate} className="btn btn-lg btn-info btn-block" value="Random"/>
                    </div>                    
                </div>       
                
            </form>
            
               
            
        );
    }


}

export default DateInput;