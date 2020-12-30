import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType()
export class CreateRestaurantDto {
    @Field(type => String)
    @IsString()
    @Length(5, 16)
    name: string;

    @Field(type => Boolean)
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String)
    @IsString()
    address: string;

    @Field(type => String)
    @IsString()
    @Length(3, 16)
    ownerName: string;

    @Field(type => String)
    @IsString()
    @Length(3, 16)
    categoryName: string;

}