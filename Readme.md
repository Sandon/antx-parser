# antx-parser

## Usage

    import AntxParser from 'antx-parser'
    let antxParser = new AntxParser

    // init
    let initPromise = antxParser.init('pathToAntxFile')
    initPromise.then(function (data) {
      console.log(data)
      console.log(antxParser.data)
      console.log(antxParser.filePath)
    })

    // update when antx file is changed
    let updatePromise = antxParser.update()
    updatePromise.then(function (data) {
      console.log(data)
      console.log(antxParser.data)
      console.log(antxParser.filePath)
    })
