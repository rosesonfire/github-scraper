import url from 'url'
import { utils } from 'js-utils'

import getBaseUrl from './../../main/services/getBaseUrl'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: getBaseUrl,
  dependencyInstances: {
    urlParser: url.parse.bind(url)
  }
})
