Array.prototype.hasElement = function (el, value) {
  for (let i = 0; i < this.length; i++) {
    if (value) {
      if (this[i][value] === el[value]) {
        return true
      }
    } else {
      if (this[i] === el) {
        return true
      }
    }
  }
  return false
}
