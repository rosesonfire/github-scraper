export default ({ xml2js, utils }) => ({
  convert: xml => utils.createDefensivePromise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
})
