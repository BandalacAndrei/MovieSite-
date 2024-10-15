import { IsString, IsNotEmpty, IsOptional, IsInt, IsDate, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovieResponseDto {
    @ApiProperty({ description: 'Title', example: 'Spider-man' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Description',example: 'Lorem ispum', required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ description: 'Debut', type: Date, required: false })
    @IsDate()
    @IsOptional()
    release_date?: Date;

    @ApiProperty({ description: 'Durate in minutes' })
    @IsInt()
    @IsNotEmpty()
    duration: number;

    @ApiProperty({ description: 'Rating', required: false })
    @IsDecimal()
    @IsOptional()
    rating?: number;

    @ApiProperty({ description: 'URL for image', required: false })
    @IsString()
    @IsOptional()
    image?: string;
}
