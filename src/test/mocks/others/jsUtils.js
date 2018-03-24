import sinon from 'sinon'

export const wrappersMock = () => ({
  axiosWrapper: ({
    get: sinon.mock(),
    postWithPolling: sinon.mock()
  })
})
