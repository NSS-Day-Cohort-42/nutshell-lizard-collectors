let friends = []
let users = []


const eventHub = document.querySelector(".container")

const dispatchStateChange = () => {
    const friendStateChange = new CustomEvent("friendStateChanged")
    eventHub.dispatchEvent(friendStateChange)
}


export const useUsers = () => users.slice()

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
  .then(res => res.json())
  .then(
    data => users = data
  )
}

export const useFriends = () => friends.slice()

export const getFriends = () => {
  return fetch("http://localhost:8088/friends")
  .then(res => res.json())
  .then(
    data => friends = data

  )
}



export const addFriend = (friend) => {
  return fetch("http://localhost:8088/friends", {
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(friend)
  })
  .then(getFriends)
  .then(dispatchStateChange)
}

export const deleteFriend = (id) => {
  return fetch(`http://localhost:8088/friends/${entryId}`, {
    method: "DELETE"
  })
  .then(getEntries)
  .then(dispatchStateChangeEvent)
  .catch(
    (error) => {
      console.log(error)
    }
  )
}