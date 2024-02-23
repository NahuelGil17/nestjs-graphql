import { CreateLandingInput } from "./create-landing.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateLandingInput extends PartialType(CreateLandingInput) {
  @Field(() => Int)
  id: number;
  @Field()
  heroTitle: string;

  @Field()
  heroSubtitle: string;

  @Field()
  heroHighlight: string;

  @Field()
  heroDescriptionA: string;

  @Field()
  heroDescriptionB: string;

  @Field(() => [String])
  servicesA: string[];

  @Field(() => [String])
  servicesB: string[];

  @Field(() => [String])
  contactTitle: string;

  @Field(() => [String])
  footerTitle: string;

  @Field()
  featuredProjectsJson: string;

  @Field()
  knowUsJson: string;

  @Field()
  newsLetterTitle: string;

  @Field()
  ourClientsJson: string;

  @Field()
  ourStatsJson: string;
}
