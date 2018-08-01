export function deepCopy(obj) {
  if (obj === null) {
    return null
  }

  if (typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj)
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  let newObj = new obj.constructor()

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = obj[key]
      newObj[key] = typeof val === 'object' ? deepCopy(val) : val
    }
  }

  return newObj
}
