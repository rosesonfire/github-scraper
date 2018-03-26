import { utils } from 'js-utils'

import fetchData from './../../main/services/fetchData'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: fetchData,
  dependencyConfig: {
    http: 'others/axiosWrapper'
  }
})
