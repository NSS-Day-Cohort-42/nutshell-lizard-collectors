import { getFriends, useFriends, getUsers, useUsers } from "./friendDataProvider.js"

const friendContainer = document.querySelector(".contentRight--friends")
const placeFriends = document.querySelector(".dropFriendsHere")

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
  
  // const foundFriends = friends.filter(filteredFriend => {
  //   return filteredFriend.activeUserId === parseInt(sessionStorage.getItem("activeUser"))
  // })
  
  // console.log(foundFriends)

 
  

  friendContainer.innerHTML = `
    <div class="friendContainer">

      <div class="friendsListHeading">Friends List</div>
      <div class="dropFriendsHere">Friends will render here!</div>
      <div class="buttonContainer">
        <button>Delete Friend</button>
        <button>Add Friend</button>
      </div>
    
    </div>
  `
} 

