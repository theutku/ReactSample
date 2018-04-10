import React from 'react';
import ApiBase from './ApiBase';

const ApiKey = 'YOURAPIKEYGOESHERE';

class WeatherApi extends ApiBase {

    getWeatherData = async (city, country) => {

        if (city && country) {

            const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);
            const data = await apiCall.json();

            return this.setResult(data);

        } else {

            return this.setEmptyQuery();

        }
    }
}

export default WeatherApi;