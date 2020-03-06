import generate from 'gfynonce'

const STORAGE_USER_ID = 'moviedb.userId'

export function getUserId() {
  let userId = localStorage.getItem(STORAGE_USER_ID)
  if (!userId) {
    userId = generate({ adjectives: 1, separator: '-' })
    localStorage.setItem(STORAGE_USER_ID, userId)
  }
  return userId
}
