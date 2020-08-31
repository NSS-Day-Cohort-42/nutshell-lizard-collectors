import { friendList } from "./friends/friendList.js";
import { newsList } from "./news/newsList.js";
import { eventList } from "./events/eventList.js";
import { TaskList } from ".//tasks/taskList.js"
import { weatherList } from "./weather/weatherList.js";

export const Nutshell = () => {
    // Render all your UI components here
    
  
    
    friendList()
    newsList()
    eventList()
    TaskList()
    weatherList()



    
}