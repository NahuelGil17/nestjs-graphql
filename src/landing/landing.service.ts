import { Injectable } from "@nestjs/common";
import { CreateLandingInput } from "./dto/create-landing.input";
import { UpdateLandingInput } from "./dto/update-landing.input";
import { LandingPage } from "./entities/landing.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(LandingPage)
    private landingRepository: Repository<LandingPage>
  ) {}
  create(createLandingInput: CreateLandingInput) {
    const landing = this.landingRepository.create(createLandingInput);
    return this.landingRepository.save(landing);
  }

  findAll() {
    return this.landingRepository.find();
  }

  findOne(id: number) {
    return this.landingRepository.findOne({ where: { id } });
  }

  update(id: number, updateLandingInput: UpdateLandingInput) {
    return this.landingRepository.update({ id }, updateLandingInput);
  }

  remove(id: number) {
    return this.landingRepository.delete({ id });
  }
}
