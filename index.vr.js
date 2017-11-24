import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

import WeatherCard from 'vr/components/weatherCard';

const apiKey = 'b24b9adf867c14467552d2e7f7c37caa';

class WeatherSimulator extends Component {
    constructor() {
        super();
        this.state = {
            weatherObject:{
                name: '',
                main: {
                    temp: 0
                },
                weather: [
                    {description: ''}
                ],
                wind: {
                    deg: 1,
                    speed: 1
                }

            }
        }
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${apiKey}`, {
            method: 'GET'
        })
            .then(data => data.json())
                .then(json => this.setState({weatherObject: json}));
    }


    render() {
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Pano source={asset('lombard-vr.jpg')}></Pano>
                <WeatherCard weatherObject={this.state.weatherObject} />
            </View>
        )
    }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
