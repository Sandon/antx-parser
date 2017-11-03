const fs = require('mz/fs')

let reserveData = {}

class AntxParser {
  constructor () {
  }

  async _parse () {
    await fs.stat(this.filePath)

    let content = await fs.readFile(this.filePath, 'utf8')
    content = content.split(/\n/g)
    this.data = {}

    const len = content.length
    for (let i = 0; i != len; i++) {
      content[i] = content[i].replace(/\s+/g, '')
      if (0 == content[i].length)
        continue

      let arr = content[i].split('=')
      this.data[arr[0]] = arr[1]
    }

    reserveData[this.filePath] = this.data
  }

  init (filePath) {
    return new Promise(async (resolve, reject) => {
      this.filePath = filePath

      if (reserveData[this.filePath]) {
        this.data = reserveData[this.filePath]
      } else {
        await this._parse()
      }
      resolve(this.data)
    })
  }

  update () {
    return new Promise(async (resolve, reject) => {
      await this._parse()
      resolve(this.data)
    })
  }
}

module.exports = AntxParser
