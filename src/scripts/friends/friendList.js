import { getFriends, useFriends, getUsers, useUsers } from "./friendDataProvider.js"
import { friendsAsHTML } from "./friendHTMLConverter.js"

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
  debugger
  friendContainer.innerHTML = `
    <div class="friendContainer">

      <div class="friendsListHeading">Friends List</div>
      <div class="dropFriendsHere">${friendHTML}</div>
      <div class="buttonContainer">
        <button>Delete Friend</button>
        <button>Add Friend</button>
      </div>
    
    </div>
  `
} 

