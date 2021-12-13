import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { TerminusModule } from '@nestjs/terminus'
import { APP_GUARD } from '@nestjs/core'
import { HttpModule } from '@nestjs/axios'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ListingsModule } from '../listings/listings.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthGuard } from '../auth/auth.guard'
import { loadConfig } from '../config'
import { DateScalar } from '../graphql/date.scalar'

const appDir = join(process.cwd(), 'apps', 'airbnb-clone-api')
const envFilePath = join(appDir, '.env')

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
    DateScalar,
    GraphQLModule.forRoot({
      playground: true,
      useGlobalPrefix: true,
      typePaths: [join(appDir, './src/graphql/listings.graphql')],
      definitions: {
        path: join(appDir, './src/graphql/graphql.typings.ts'),
        outputAs: 'class',
        customScalarTypeMapping: {
          Date: 'Date',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
    // TODO: Use this with GraphQL { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
