import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import * as path from 'path'
import { ListingsModule } from '../listings/listings.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthGuard } from '../auth/auth.guard'
import { loadConfig } from '../config'

const envFilePath = path.join(process.cwd(), 'apps/airbnb-clone-api/.env')
@Module({
  imports: [
    ListingsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath, load: [loadConfig] }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
