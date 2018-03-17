import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import fetchData from './../../main/services/fetchData'
// mocks
import { wrappersMock } from './../mocks/others/jsUtils'

describe('FetchData', () => {
  let
    mocks,
    axios,
    url,
    data

  before(() => {
    url = 'https://github.com/timeline'
    data = '<xml><tag>Some data</tag></xml>'
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When fetching data', () => {
    beforeEach(() => {
      axios = wrappersMock().axiosWrapper
      mocks = [ axios.get ]
      axios.get.once().withExactArgs(url).returns(Promise.resolve(data))
    })

    it('should return a promise', () =>
      fetchData({ http: axios })(url).should.be.a('promise'))

    it('should fetch data', () =>
      fetchData({ http: axios })(url).should.eventually.equal(data))
  })
})
