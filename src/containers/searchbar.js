import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBarComponent extends Component{

    constructor(props){
        super(props);

        // Intializing the state with an empty string
        this.state = {term: ' '};

        //bind is done to handle use of this in callbacks       
        this.onInputChange=this.onInputChange.bind(this);

        this.onFormSubmit=this.onFormSubmit.bind(this);    
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.onFormSubmit} >
                <input
                    placeholder="Get Five Day Forecast " 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        )   
    }

    onInputChange(event){
     //   console.log("The input is "+event.target.value);
        this.setState({
            term:event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault();

        // Here we will fetch the data and call on 
        this.props.fetchWeather(this.state.term);

        //Clear search input
        this.setState({
            term:''
        }) ;

    }

}   


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBarComponent);