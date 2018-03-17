import sinon from 'sinon'

export const utilsStub = () => ({
  createDefensivePromise: sinon.stub()
})

export const wrappersMock = () => ({
  axiosWrapper: ({
    get: sinon.mock(),
    postWithPolling: sinon.mock()
  })
})
