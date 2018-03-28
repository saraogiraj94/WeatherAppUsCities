import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherListComponent extends Component{

    renderWeather(cityData){
        if(cityData!=null){
            return (
                <tr key={cityData.city.name}>
                    <td>{cityData.city.name}</td>
                </tr>
            )    
        }
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            
        )
    }
}

function mapStateToProps(state){
    return {
        weather:state.weather
    }
}

export default connect(mapStateToProps)(WeatherListComponent);
