import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @HideField() // graphql-client から取得できなくさせる
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
