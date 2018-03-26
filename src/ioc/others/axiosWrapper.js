import axios from 'axios'
import Rx from 'rxjs'
import { utils, wrappers } from 'js-utils'

import config from './../../config'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: wrappers.axiosWrapper,
  configuration: {
    maxPollTries: config.scraper.maxPollTries,
    pollingInterval: config.scraper.pollingInterval
  },
  dependencyInstances: {
    axios,
    Rx
  }
})
