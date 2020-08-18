import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Muser {
  @PrimaryColumn("int", { generated: true })
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  fileName: string;
  @Column()
  views: number;
}
