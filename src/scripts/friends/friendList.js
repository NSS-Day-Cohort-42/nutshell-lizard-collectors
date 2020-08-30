import { getFriends, useFriends, getUsers, useUsers } from "./friendDataProvider.js"
import { friendsAsHTML } from "./friendHTMLConverter.js"

const eventHub = document.querySelector(".container")
const friendContainer = document.querySelector(".contentRight--friends")
let friends = []
let users = []


export const accessFriendData = () => {
  getFriends()
  .then(getUsers)
  .then(() => {
    friends = useFriends()
    users = useUsers()  
    renderFriendContainer()
  })
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
        <button>Delete Friend</button>
        <button id="addFriendButton">Add Friend</button>
        <dialog class="addFriendDialog"></dialog>
      </div>
    
    </div>
  `
} 

eventHub.addEventListener("friendStateChanged", renderFriendContainer)

eventHub.addEventListener("click", e => {
  if (e.target.id === "addFriendButton") {
    const addFriendModal = document.querySelector(".addFriendDialog")
    addFriendModal.innerHTML = `
    <div>Hello</div>
    <button id="closeButton">Close</button>
    `
    addFriendModal.showModal()

  } 
})

eventHub.addEventListener("click", event => {
  if (event.target.id === "closeButton") {
    const dialog = event.target.parentNode
    dialog.close()
  }
})