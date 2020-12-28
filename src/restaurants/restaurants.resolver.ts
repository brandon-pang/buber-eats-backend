import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "src/dto/create-restaurant.dto";
import { Restaurant } from "src/entities/restaurants.entity";

@Resolver(of => Restaurant)
export class RestaurantsResolver {
    //GraphQL 
    @Query(returns => [Restaurant])
    restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        console.log(veganOnly)
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto) {
        console.log(createRestaurantDto)
        return true;
    }
    /*
    createRestaurant(
        @Args('name') name:string
        @Args('isVegan') isVegan:boolean
        @Args('address') address:string
        @Args('ownerName') ownerName:string
    )
    */
}