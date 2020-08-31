import {useWeather,getWeather} from "./weatherDataProvider.js"
import {weatherHTML} from "./weatherHTMLConverter.js"

const contentTarget=document.querySelector(".contentLeft--weather")
const eventHub=document.querySelector(".container")


const baseLocation = {
    city: "Nashville",
    state: "TN"

}
export const weatherList = () => {
    getWeather(baseLocation)
    .then(()=>{
    const weatherArray=useWeather()
    const todayWeather = weatherArray[0]
    let weatherHTMLRep = weatherHTML(todayWeather)
    contentTarget.innerHTML=`
    <h2>Today's Weather</h2>
    <section class=weather--section>
    ${weatherHTMLRep}
    </section>`
    })
}
