import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MovieCreateDto } from './dtos/movie.create.dto';
import {MovieResponseDto} from "./dtos/movie.response.dto";
import {plainToInstance} from "class-transformer";

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>,
    ) {}

    findAll() {
        return this.moviesRepository.find();
    }


    async getOne(id: number): Promise<MovieResponseDto>{
        try{
            const cats = await this.moviesRepository.findOneOrFail({
                where: {
                    id
                }
            })
            return plainToInstance(MovieResponseDto, cats)
        } catch(e){
            throw new NotFoundException('Movie not found')
        }

    }

    create(createMovieDto: MovieCreateDto) {
        const movie = this.moviesRepository.create(createMovieDto);
        return this.moviesRepository.save(movie);
    }

    async delete(id: number){

        const existingCat = await this.getOne(id)

        this.moviesRepository.delete(id)
    }
}
