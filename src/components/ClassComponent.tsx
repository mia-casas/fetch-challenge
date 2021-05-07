import { render } from '@testing-library/react';
import React from 'react';
import FunctionalComponent from './FunctionalComponent';

console.log("Testing")

type Location = {
    long: number;
    lat: number;
    weather: string;
};
// let long: number
// let lat: number

class MyWeather extends React.Component<{}, Location>{
    constructor(props: any) {
        super(props);
        this.state = {
            long: 0,
            lat: 0,
            weather: ''
        }
        console.log(props)
    }
    
    myLocation(){
        const geolocation = navigator.geolocation;

        geolocation.getCurrentPosition((position) => {
            console.log(position.coords)

            this.setState({
                long: position.coords.longitude,
                lat: position.coords.latitude
            })
            console.log(this.state.long, this.state.lat)
        })
// this is working
    }
   fetchWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=ea1dab5cacbb098d89d6a202fac94298`)
    .then(res => res.json())
    .then(data => {this.setState({weather: data.weather[0].description})})
    .catch(console.log)
    return console.log(this.state.weather)
  }
  componentDidMount(){
      this.fetchWeather()
  }
    render(){
        return(
            <div>
                <FunctionalComponent />
                {/* {this.myLocation()} */}
                <p>{this.state.weather}</p>
            </div>
        )
    }
};

// componentDidMount(){
//     const geolocation = navigator.geolocation;
//     const apikey = 'ea1dab5cacbb098d89d6a202fac94298'

//     geolocation.getCurrentPosition((position) => {
//         const {latitude, longitude} = position.coords
//     })
// }

export default MyWeather;