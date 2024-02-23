import { Module } from '@nestjs/common';
import { LandingService } from './landing.service';
import { LandingResolver } from './landing.resolver';

@Module({
  providers: [LandingResolver, LandingService],
})
export class LandingModule {}
