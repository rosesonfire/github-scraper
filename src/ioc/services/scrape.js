import { utils } from 'js-utils'

import scrape from './../../main/services/scrape'
import config from './../../config'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: scrape,
  configuration: {
    url: config.scraper.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    saveData: 'services/saveData'
  }
})
