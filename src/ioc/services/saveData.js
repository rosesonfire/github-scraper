import { utils } from 'js-utils'

import saveData from './../../main/services/saveData'
import config from './../../config'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: saveData,
  configuration: {
    url: `http://${config.dataAPI.host}:${config.dataAPI.port}` +
         `${config.dataAPI.path}`
  },
  dependencyConfig: {
    http: 'others/axiosWrapper'
  }
})
