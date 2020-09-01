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

export const saveMessage = message => {
  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(getChats)
  .then(dispatchStateChange)
}

export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:8088/messages/${messageId}`, {
    method: "DELETE"
  })
  .then(getChats)
  .then(dispatchStateChange)
}