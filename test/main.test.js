// --compilers js:babel-core/register
import 'babel-polyfill'
//const AntxParser = require('../src/index')
import AntxParser from '../src/index'
const chai = require('chai')
const path = require('path')
console.log(AntxParser)
let expect = chai.expect

describe('antx-parser的测试', function (done) {
  it('值的解析', function(done) {
    let antxParser = new AntxParser()
    let promise = antxParser.init(path.join(__dirname, '/antx.properties'))
    promise.then((data) => {
      expect(data).to.be.deep.equal({'oss.id': '123', 'oss.secret': '456'});
      expect(antxParser.data).to.be.deep.equal({'oss.id': '123', 'oss.secret': '456'});
      done();
    })
  })

})