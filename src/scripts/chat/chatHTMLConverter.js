export const messageAsHTML = (message) => {
  return `
    <div class="oneMessage">
      <div class="messageOutput">${message.message} </div>
      <div class="userOutput"> from ${message.user.username}</div>
    </div>
  `
}