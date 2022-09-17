import morganMiddleware from './api/logger/morgan'
import app from './app'
import Logger from './api/logger/winston'
import swagger from '../src/api/swagger/swagger.json'

app.use(morganMiddleware)

app.get('/', (_, res) => {
  res.send(swagger)
})

app.get('/logger', (_, res) => {
  Logger.error('This is an error log')
  Logger.warn('This is a warn log')
  Logger.info('This is a info log')
  Logger.http('This is a http log')
  Logger.debug('This is a debug log')
})

app.listen(3000, () => {
  console.log('Server on')
})
