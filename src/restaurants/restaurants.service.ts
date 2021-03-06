import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRestaurantDto } from "src/dto/create-restaurant.dto";
import { Restaurant } from "src/entities/restaurants.entity";
import { Repository } from "typeorm";

@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) private restaurants: Repository<Restaurant>) { }
    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
    }
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        const newRestaurant = this.restaurants.create(createRestaurantDto)
        return this.restaurants.save(newRestaurant);
    }
}