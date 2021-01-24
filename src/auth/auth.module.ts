import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthguardGuard } from './authguard.guard';

@Module({
    imports: [PassportModule.register({defaultStrategy:'jwt'})],
    providers:[AuthguardGuard]
})
export class AuthModule {}
