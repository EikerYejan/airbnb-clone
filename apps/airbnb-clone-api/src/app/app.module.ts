import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'
import { TerminusModule } from '@nestjs/terminus'
import { APP_GUARD } from '@nestjs/core'
import { HttpModule } from '@nestjs/axios'
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
    HttpModule,
    TerminusModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath, load: [loadConfig] }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('throttleTtl'),
        limit: config.get('throttleLimit'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
