import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(id => Number)
    id: Number;

    @Field(is => String)
    @Column()
    name: string;

    @Field(type => Boolean)
    @Column()
    isVegan: boolean;

    @Field(type => String)
    @Column()
    address: string;

    @Field(type => String)
    @Column()
    ownerName: string;

    @Field(type => String)
    @Column()
    categoryName: string;
}