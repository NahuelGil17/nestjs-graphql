import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @MaxLength(30)
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string;

  @Field()
  @IsNotEmpty()
  authorId: number;
}
