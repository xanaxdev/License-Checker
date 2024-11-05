import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LicenseKeyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  license: string;
}