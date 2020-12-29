import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Restaurant } from "src/entities/restaurants.entity";
import { Repository } from "typeorm";

@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) private restaurants: Repository<Restaurant>) { }
    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
    }
}