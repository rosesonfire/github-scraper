import axios from 'axios'
import Rx from 'rxjs'
import { wrappers } from 'js-utils'

import { createNewInstance } from './../iocHelper'
import config from './../../config'

exports = module.exports = createNewInstance({
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
