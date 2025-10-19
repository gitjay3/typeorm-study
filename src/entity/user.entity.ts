import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

export enum Role {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({
        type: 'text',
        name: 'title',
        length: 300,
        nullable: true,
    })
    title: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER,
    })
    role: Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @VersionColumn()
    version: number;
}
