import {
  AfterRecover,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import Comment from "./Comment";

@Entity({
  name: "post",
})
export default class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Comment, (type) => type.post, {
    cascade: ["insert", "recover"],
    eager: true,
  })
  comments: Comment[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date

  @AfterRecover()
  onRecover() {
    console.log(`Hello, I'm the post with id ${this.id}.`);
  }
}
