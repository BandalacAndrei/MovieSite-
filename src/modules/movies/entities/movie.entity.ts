import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'date', nullable: true })
    release_date: Date;

    @Column()
    duration: number;

    @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
    rating: number;

    @Column({ nullable: true })
    image: string;
}
