import { friendList } from "./friends/friendList.js";
import { newsList } from "./news/newsList.js";
import { eventList } from "./events/eventList.js";
import { TaskList } from ".//tasks/taskList.js"
import { chatList } from "./chat/chatList.js";

export const Nutshell = () => {
    // Render all your UI components here
    
  
    
    friendList()
    newsList()
    eventList()
    TaskList()
    chatList()



    
}