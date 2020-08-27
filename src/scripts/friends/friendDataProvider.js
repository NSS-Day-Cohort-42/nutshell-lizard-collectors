let friends = []
let users = []

export const useFriends = () => friends.slice()

export const getFriends = () => {
  return fetch("http://localhost:8088/friends")
  .then(res => res.json())
  .then(
    data => friends = data

  )
}

export const useUsers = () => users.slice()

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
  .then(res => res.json())
  .then(
    data => users = data
  )
}
