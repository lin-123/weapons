class Log {
  constructor(debug, name) {
    ;['info', 'warn'].forEach(key => {
      this[key] = (msg) => debug && console[key](`#${name}# `, msg)
    })
    this.error = (msg) => console.error(`#${name}# `, msg)
  }
}

