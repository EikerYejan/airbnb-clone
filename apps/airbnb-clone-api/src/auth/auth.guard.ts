import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request } from 'express'
import { Config } from '../config'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService<Config>) {}

  private readonly logger = new Logger('AuthGuard')

  private readonly apiKey = this.config.get<string>('apiKey')

  private readonly whiteListedRoutes = ['/api', '/api/health']

  onModuleInit() {
    this.logger.log('AuthGuard mounted')
  }

  canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest<Request>()
      const { headers, query, path } = request
      const incomingKey = headers['x-api-key'] || query?.apiKey

      if (this.whiteListedRoutes.includes(path)) return true

      return this.apiKey && incomingKey === this.apiKey
    } catch (error) {
      this.logger.error(error?.message?.toUpperCase())

      throw new UnauthorizedException(error?.message)
    }
  }
}
