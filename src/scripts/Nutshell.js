import { accessFriendData } from "./friends/friendList.js";
import { eventList } from "./events/eventList.js";
import { TaskList } from ".//tasks/taskList.js"

export const Nutshell = () => {
    // Render all your UI components here
    
    
    
    accessFriendData()
    eventList()
    TaskList()



    
}