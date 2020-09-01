export const messageAsHTML = (message) => {
  return `
    <div class="oneMessage">
      <div class="messageOutput">${message.message}</div>
      <div class="lowerChatWrap">
        <div class="deleteButtonWrap">
          <button class="deleteButton id="deleteMessage--${message.id}">delete</button>
        </div>
        <div class="userOutput"> from ${message.user.username}</div>
      </div>
    </div>
  `
}