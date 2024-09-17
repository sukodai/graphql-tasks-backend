import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/models/user.models';

@ObjectType()
export class SignInResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}
