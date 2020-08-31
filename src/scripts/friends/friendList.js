import { getFriends, useFriends, getUsers, useUsers, addFriend, deleteFriend } from "./friendDataProvider.js"
import { friendsAsHTML } from "./friendHTMLConverter.js"

const eventHub = document.querySelector(".container")
const friendContainer = document.querySelector(".contentRight--friends")
let friends = []
let users = []


export const accessFriendData = () => {
  getFriends()
  .then(getUsers)
  .then(setVarState)
}

export const setVarState = () => {
  friends = useFriends()
  users = useUsers()
  renderFriendContainer()
}

// filters and maps friend and user data from api and returns an array of friends
// Builds a string of friends and adds them to the html below
export const renderFriendContainer = () => {


  const currentUser = parseInt(sessionStorage.getItem("activeUser"))

  const foundFriends = friends.filter(filteredFriend => {
    return filteredFriend.activeUserId === currentUser
  })

  const foundFriendsArray = foundFriends.map(friend => {
    const friendObjects = users.find(user => user.id === friend.userId)
    return friendObjects

  }) 

    let friendHTML = ""

    for (const friend of foundFriendsArray) {
      friendHTML += friendsAsHTML(friend)      
    }
  
  friendContainer.innerHTML = `
    <div class="friendContainer">

      <div class="friendsListHeading">Friends List</div>
      <div class="dropFriendsHere">${friendHTML}</div>
      <div class="buttonContainer">
        <button id="deleteFriendButton">Delete Friend</button>
        <button id="addFriendButton">Add Friend</button>
        <div class ="aFriendD">
          <dialog class="addFriendDialog"></dialog>
        </div>
        <div class="dFriendD">
          <dialog class="deleteFriendDialog"></dialog>
        </div>
      </div>
    
    </div>
  `
} 

eventHub.addEventListener("friendStateChanged", setVarState)

// Below is the add friends click event
eventHub.addEventListener("click", e => {
  if (e.target.id === "addFriendButton") {
    const addFriendModal = document.querySelector(".addFriendDialog")
    
    const arrNoSelf = users.filter(filteredUser => {
      return filteredUser.id !== parseInt(sessionStorage.getItem("activeUser"))
    })

    addFriendModal.innerHTML = `
    <label for="listOfUsers">Select a user to add to your friends list</label>
    <select name="listOfUsers" id="listOfUsers">
      <option value="0">choose a user below</option>
      ${
        arrNoSelf.map(
          (user) => {
            return `<option value=${user.id}>${user.username}</option>`
          }
        ).join("")
      }
    </select>
    <button id="saveFriendButton">Add Friend</button>
    <button id="closeButton">Close</button>
    `
    addFriendModal.showModal()

  } 
})

// Below is the delete friends click event
eventHub.addEventListener("click", e => {
  if (e.target.id === "deleteFriendButton") {
    const deleteFriendModal = document.querySelector(".deleteFriendDialog")

    const arrNoSelf = users.filter(filteredUser => {
      return filteredUser.id !== parseInt(sessionStorage.getItem("activeUser"))
    })

    deleteFriendModal.innerHTML = `
    <label for="listOfUsers">Select a user to add to your friends list</label>
    <select name="listOfUsers" id="listOfUsers">
      <option value="0">choose a user below</option>
      ${
        arrNoSelf.map(
          (user) => {
            return `<option value=${user.id}>${user.username}</option>`
          }
        ).join("")
      }
    </select>
    <button id="deleteFriendButtonSave">Delete Friend</button>
    <button id="closeButton">Close</button>
    `
    deleteFriendModal.showModal()

  } 
})

// below is the save friends click event
eventHub.addEventListener("click", e => {
  if (e.target.id === "saveFriendButton") {
    const friendId = document.querySelector("#listOfUsers").value
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    const matchingFriend = users.find(
      (user) => {
        return user.id === parseInt(friendId)
      }
      )
      const friendName = matchingFriend.id

    const newFriend = {
      userId: friendName,
      activeUserId: activeUser
    }
   
    addFriend(newFriend)
    const dialog = event.target.parentNode
    dialog.close()
  }
})

// This event deletes a friend
eventHub.addEventListener("click", e => {
  if (e.target.id === "deleteFriendButtonSave") {
    const Id = document.querySelector("#listOfUsers").value
    const activeUser = friends.filter(
      (friend) => {
        return friend.activeUserId === parseInt(sessionStorage.getItem("activeUser"))
      }
      )
    
    const foundFriend = activeUser.find(friend => friend.userId === parseInt(Id))
    const idToDelete = foundFriend.id
    
    deleteFriend(idToDelete)
    const dialog = event.target.parentNode
    dialog.close()
  }
})


// This closes the modal
eventHub.addEventListener("click", event => {
  if (event.target.id === "closeButton") {
    const dialog = event.target.parentNode
    dialog.close()
  }
})