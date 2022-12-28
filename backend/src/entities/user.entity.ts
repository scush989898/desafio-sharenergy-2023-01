import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 90 })
  username: string;

  @Column({ length: 170 })
  @Exclude()
  password: string;
}

export { User };
