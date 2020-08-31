let chats = []

const eventHub = document.querySelector(".container")

const dispatchStateChange = () => {
  const chatStateChange = new CustomEvent("chatStateChanged")
  eventHub.dispatchEvent(chatStateChange)
}

export const useChats = () => chats.slice()


export const getChats = () => {
  return fetch("http://localhost:8088/messages?_expand=user")
  .then(res => res.json())
  .then(data => chats = data)
}