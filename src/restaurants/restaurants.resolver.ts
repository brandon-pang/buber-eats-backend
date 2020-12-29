import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "src/dto/create-restaurant.dto";
import { Restaurant } from "src/entities/restaurants.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(of => Restaurant)
export class RestaurantsResolver {
    constructor(private readonly restarantService: RestaurantService) { }
    //GraphQL 
    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]> {
        return this.restarantService.getAll();
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