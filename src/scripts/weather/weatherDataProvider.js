import {key} from "../settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}


export const getWeather = (location) => {
 
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.city},${location.state},us&mode=json&appid=${key.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}

        