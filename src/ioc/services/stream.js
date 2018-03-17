import Rx from 'rxjs'
import { utils } from 'js-utils'

import { createNewInstance } from './../iocHelper'
import stream from './../../main/services/stream'
import config from './../../config'

exports = module.exports = createNewInstance({
  instanceConstructor: stream,
  configuration: {
    fetchInterval: config.scraper.fetchInterval
  },
  dependencyInstances: {
    Rx,
    utils
  },
  dependencyConfig: {
    scrape: 'services/scrape'
  }
})
