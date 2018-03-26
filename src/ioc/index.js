import IoC from 'electrolyte'

IoC.use(IoC.dir('dist/ioc'))

const dependencies = {
  stream: 'services/stream'
}

export const createInstance = name => IoC.create(dependencies[name])
