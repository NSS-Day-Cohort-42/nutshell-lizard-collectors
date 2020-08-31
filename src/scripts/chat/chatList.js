import { getChats, useChats } from "./chatDataProvider.js";
import { messageAsHTML } from "./chatHTMLConverter.js";

const chatContainer = document.querySelector(".contentRight--chats")

let chats = []

export const chatList = () => {
  getChats()
  .then(setVarState)
}

export const setVarState = () => {
  chats = useChats()
  renderChats()
}

const renderChats = () => {

  let chatHTML = ""

  for (const message of chats) {
    chatHTML += messageAsHTML(message)
  }


  chatContainer.innerHTML = `
    <div class="messageContainer">
      <div class="messageListHeading">Messages</div>
      <div class="dropMessagesHere">${chatHTML}</div>
      <input type="text" placeholder="type your message">
      <div class="messageButtonContainer">
        <button id="sendMessageButton">Send</button>
      </div>
    </div>
  `

}
