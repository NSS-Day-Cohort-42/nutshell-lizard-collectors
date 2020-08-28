// import { use } from "./friendList.js";

const eventHub = document.querySelector(".container")

export const friendsAsHTML = (user) => {
  return `
    <div class="oneFriend">
      <div>${user.username}</div>
    </div>
  `
}

// export const addFriendForm = () => {
//   return `
//   <div>Add a friend!!</div>
//   <div>Friends username:<input type="text" id="addFriendName" placeholder="Enter Username" /></div>
//   <button id="addFriend">Confirm add</button>
//   `
// }

// eventHub.addEventListener("click", e => {
//   if (e.target.dispatchEvent === "addFriend") {
//     const friendName = document.querySelector("#addFriendName").value
//     const activeUser = parseInt(sessionStorage.getItem("activeUser"))

//     const newFriendAsId = () => {
//       use
//     }

//     const newFriend = {
//       userId: fr
//       activeUserId
//     }
//   }
// })