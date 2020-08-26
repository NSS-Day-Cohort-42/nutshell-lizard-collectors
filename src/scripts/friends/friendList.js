const friendTarget = document.querySelector(".contentRight--friends")

export const renderFriendContainer = () => {
  
  friendTarget.innerHTML = `
    <div class="friendContainer">
      <h4 class="friendsListHeading">Friends List</h4>
      <div class="buttonContainer">
        <button>Delete Friend</button>
        <button>Add Friend</button>
      
      </div>
    
    </div>
  `
} 