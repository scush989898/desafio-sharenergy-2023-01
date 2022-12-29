import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 90 })
  name: string;

  @Column({ unique: true, length: 70 })
  email: string;

  @Column({ length: 11 })
  phone: string;

  @OneToOne(() => Address, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  address: Address;

  @Column({ unique: true, length: 11 })
  cpf: string;
}

export { Client };
