import { utils } from 'js-utils'

import convertXMLToJSON from './../../main/services/convertXMLToJSON'

exports = module.exports = utils.iocHelper.createNewInstance({
  instanceConstructor: convertXMLToJSON,
  dependencyConfig: {
    converter: 'lib/wrappers/xml2jsWrapper'
  }
})
