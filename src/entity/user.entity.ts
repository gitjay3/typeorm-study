import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @VersionColumn()
    version: number;
}
