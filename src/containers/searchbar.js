import React,{Component} from 'react';

export default class SearchBarComponent extends Component{

    constructor(props){
        super(props);

        // Intializing the state with an empty string
        this.state = {term: ' '};

        //bind is done to handle use of this in callbacks
        this.onInputChange=this.onInputChange.bind(this);
    }

    render(){
        return(
            <form className="input-group">
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
}