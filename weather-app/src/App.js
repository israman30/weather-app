import React, { Component } from 'react';
import './App.css';

// Import components
import Titles from './components/titles';
import Forms from './components/form';
import Weather from './components/weather';

const API_KEY = 'f755d47212d4330310d42041f6b06a21';
// http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=f755d47212d4330310d42041f6b06a21&=metric

class App extends Component {

  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    
    // This if statement checks if the user press button witthout any input info
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      });
    } else {
      this.setState({
        temperature: undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:'Please enter value'
      });
    }
  }

  render() {
    return (
      <div className="App">
      <div className='titles'>
        <Titles />
      </div>
        <div className='form'>
          <Forms getWeather={this.getWeather}/>
          <div className='weather'>
            <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error} 
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
