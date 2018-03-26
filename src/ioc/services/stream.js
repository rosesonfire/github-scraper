import Rx from 'rxjs'
import { utils } from 'js-utils'

import stream from './../../main/services/stream'
import config from './../../config'

exports = module.exports = utils.iocHelper.createNewInstance({
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
