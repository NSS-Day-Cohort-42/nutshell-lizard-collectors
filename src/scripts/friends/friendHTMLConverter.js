export const friendsAsHTML = (user) => {
  return `
    <div class="oneFriend">
      <div>${user.username} "${user.firstName}"</div>
    </div>
  `
}