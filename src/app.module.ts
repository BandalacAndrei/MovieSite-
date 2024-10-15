import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MoviesModule} from "./modules/movies/movies.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'test_user',
      password: process.env.DATABASE_PASSWORD || 'test_pass',
      database: process.env.DATABASE_NAME || 'test_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MoviesModule,
  ],
})
export class AppModule {}
