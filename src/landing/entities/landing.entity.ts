import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class LandingPage {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  heroTitle: string;

  @Field()
  @Column()
  heroSubtitle: string;

  @Field()
  @Column()
  heroHighlight: string;

  @Field()
  @Column("text")
  heroDescriptionA: string;

  @Field()
  @Column("text")
  heroDescriptionB: string;


  @Field(() => [String])
  @Column("simple-array")
  servicesA: string[];

  @Field(() => [String])
  @Column("simple-array")
  servicesB: string[];


  @Field(() => [String])
  @Column("text")
  contactTitle: string;

  @Field(() => [String])
  @Column("text")
  footerTitle: string;

  @Field()
  @Column("text")
  featuredProjectsJson: string;

  @Field()
  @Column("text")
  knowUsJson: string;

  @Field()
  @Column("text")
  newsLetterTitle: string;

  @Field()
  @Column("text")
  ourClientsJson: string;

  @Field()
  @Column("text")
  ourStatsJson: string;

  // Continúa con el resto de campos...
}
