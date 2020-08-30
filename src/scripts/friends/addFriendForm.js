
const eventHub = document.querySelector(".container")



eventHub.addEventListener("click", e => {
  if (e.target.dispatchEvent === "addFriend") {
    const friendName = document.querySelector("#addFriendName").value
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))

    const newFriendAsId = () => {
      use
    }

    const newFriend = {
      userId: fr
      activeUserId
    }
  }
})

export const addFriendForm = () => {
  return `
  <div>Add a friend!!</div>
  <div>Friends username:<input type="text" id="addFriendName" placeholder="Enter Username" /></div>
  <button id="addFriend">Confirm add</button>
  `
}