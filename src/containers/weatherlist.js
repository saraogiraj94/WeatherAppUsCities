import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChartComponent from './chart';

class WeatherListComponent extends Component{

    renderWeather(cityData){
        if(cityData!=null){
            const cityName=cityData.city.name;
            const temps=cityData.list.map(weather=>weather.main.temp);
            console.log(temps);
            return (
                <tr key={cityName}>
                    <td>{cityName}</td>
                    <td>
                       <ChartComponent data={temps} color="orange" />
                    </td>   
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
