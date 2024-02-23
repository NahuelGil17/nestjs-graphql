import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LandingService } from './landing.service';
import { Landing } from './entities/landing.entity';
import { CreateLandingInput } from './dto/create-landing.input';
import { UpdateLandingInput } from './dto/update-landing.input';

@Resolver(() => Landing)
export class LandingResolver {
  constructor(private readonly landingService: LandingService) {}

  @Mutation(() => Landing)
  createLanding(@Args('createLandingInput') createLandingInput: CreateLandingInput) {
    return this.landingService.create(createLandingInput);
  }

  @Query(() => [Landing], { name: 'landing' })
  findAll() {
    return this.landingService.findAll();
  }

  @Query(() => Landing, { name: 'landing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.landingService.findOne(id);
  }

  @Mutation(() => Landing)
  updateLanding(@Args('updateLandingInput') updateLandingInput: UpdateLandingInput) {
    return this.landingService.update(updateLandingInput.id, updateLandingInput);
  }

  @Mutation(() => Landing)
  removeLanding(@Args('id', { type: () => Int }) id: number) {
    return this.landingService.remove(id);
  }
}
