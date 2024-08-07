import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Post from "./Post";

@Entity({ name: 'comment' })
export default class Comment {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    description: string;

    @JoinColumn({ name: 'post_id'})
    @ManyToOne(() => Post)
    post?: Post;
}