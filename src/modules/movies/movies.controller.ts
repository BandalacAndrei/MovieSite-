import {Controller, Get, Post, Body, ParseIntPipe, Param, Delete} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieCreateDto } from './dtos/movie.create.dto';
import {ApiTags, ApiOperation, ApiResponse, ApiOkResponse, ApiParam} from '@nestjs/swagger';
import {MovieResponseDto} from "./dtos/movie.response.dto";

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get('')
    @ApiOperation({ summary: 'Get all movies' })
    @ApiResponse({ status: 200, description: 'Return all movies' })
    findAll() {
        return this.moviesService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: "Movie list"})
    @ApiParam({ name: 'id', description: 'ID', type: 'number' })
    @ApiOkResponse({
        description: "Cats list",
        type: MovieResponseDto,
        isArray: false
    })
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<MovieResponseDto>{
        return await this.moviesService.getOne(id)
    }

    @Post()
    @ApiOperation({ summary: 'Create movie' })
    @ApiResponse({ status: 201, description: 'Created.' })
    create(@Body() createMovieDto: MovieCreateDto) {
        return this.moviesService.create(createMovieDto);
    }

    @Delete(':id')
    @ApiOperation({summary: "Delete a movie by ID"})
    @ApiParam({ name: 'id', description: 'ID', type: 'number' })
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.moviesService.delete(id)
    }

}
