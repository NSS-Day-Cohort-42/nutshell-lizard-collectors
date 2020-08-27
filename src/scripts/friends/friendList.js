import { getFriends, useFriends } from "./friendDataProvider.js"

const friendContainer = document.querySelector(".contentRight--friends")
const placeFriends = document.querySelector(".dropFriendsHere")

let friends = []

export const accessFriendData = () => {
  getFriends()
  .then(useFriends)
  .then(() => {
    friends = useFriends()

    renderFriendContainer(friends)
  })
}

export const renderFriendContainer = (friends) => {
  
  const getCurrentUserFriends = () => {

  }
  

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

