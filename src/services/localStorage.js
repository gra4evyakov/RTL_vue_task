function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`${error}`)
  }
}

function getLocalStorageItem(key) {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error(`${error}`)
    return null
  }
}

export { setLocalStorageItem, getLocalStorageItem }
