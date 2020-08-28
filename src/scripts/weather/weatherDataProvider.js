import {key} from "../settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}


export const getWeather = (event) => {
 
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${event.city},${event.state},us&mode=json&appid=${key.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}

        