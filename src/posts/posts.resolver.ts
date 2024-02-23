import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { PostsService } from "./posts.service";
import { Query } from "@nestjs/graphql";
import { Post } from "./post.entity";
import { CreatePostInput } from "./dto/create-post.input";

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query((returns) => Post)
  post(@Args("id") id: number) {
    return this.postsService.findPostById(id);
  }

  @Mutation((returns) => Post)
  createPost(@Args("postInput") postInput: CreatePostInput) {
    return this.postsService.createPost(postInput);
  }
}
