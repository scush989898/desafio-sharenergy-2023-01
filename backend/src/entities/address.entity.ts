import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 10, nullable: true })
  number: string;

  @Column({ length: 60 })
  city: string;

  @Column({ length: 20 })
  state: string;

  @Column({length: 20, nullable:true})
  complement: string;
}

export { Address };
