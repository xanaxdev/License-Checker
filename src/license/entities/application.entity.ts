import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { LicenseApplicationAssignment } from './license-application-assignment.entity';

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn('uuid')
  application_id: string;

  @Column({ type: 'varchar', length: 255 })
  application_name: string;

  @ManyToMany(() => LicenseApplicationAssignment, (assignment) => assignment.application)
  licenseAssignments: LicenseApplicationAssignment[];
}
