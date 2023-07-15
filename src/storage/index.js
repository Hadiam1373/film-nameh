// get data from localstorage
export function getItem(key) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

//set data in localstorage
export function setItem(key, value , ttl) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    return localStorage.setItem(key, JSON.stringify(item))
}

//remove item in localstorage
export function removeItem(key) {
    return localStorage.removeItem(key);
}

//clear localstorage
export function clearItem() {
    return localStorage.clear();
}
