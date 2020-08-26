let friends = []

export const useFriends = () => friends.slice

export const getFriends = () => {
  return fetch("http://localhost:8088/friends")
  .then(res => res.json())
  .then(
    data => friends = data
  )
}