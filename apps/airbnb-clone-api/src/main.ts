import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as morgan from 'morgan'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  const port = process.env.PORT || 3333

  app.setGlobalPrefix(globalPrefix)
  app.use(morgan('combined'))

  const server = await app.listen(port)

  server.setTimeout(30000)

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
