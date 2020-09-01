import { getChats, useChats, saveMessage } from "./chatDataProvider.js";
import { messageAsHTML } from "./chatHTMLConverter.js";

const chatContainer = document.querySelector(".contentRight--chats")
const eventHub = document.querySelector(".container")

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
      <input class="messageEntry" type="text" placeholder="type your message">
      <div class="messageButtonContainer">
        <button id="sendMessageButton">Send</button>
      </div>
    </div>
  `
}

// Event listener that refreshes friend list when users or friends update
eventHub.addEventListener("chatStateChanged", setVarState)

// Event listener to trigger a save event for a new message
eventHub.addEventListener("click", event => {
  if (event.target.id === "sendMessageButton") {
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    const messageContent = document.querySelector(".messageEntry").value

    if (messageContent !== "") {
      const newMessage = {
        userId: currentUser,
        message: messageContent
      }
      saveMessage(newMessage)
      messageContent=""
    } else {
      window.alert("please enter a message before submitting")
    }

  }
})