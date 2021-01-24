import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class AuthguardGuard extends PassportStrategy(Strategy) {
   
  constructor(){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        issuer: 'https://dev-20552555.okta.com/oauth2/default',
        secretOrKeyProvider: passportJwtSecret({
            cache: false,
            jwksUri: 'https://dev-20552555.okta.com/oauth2/default/v1/keys',
            rateLimit: true,
            jwksRequestsPerMinute: 10
        })
    });
  }
  validate(payload:any){
    return payload;
  }
}
