import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LicenseKey } from './license-key.entity';
import { Application } from './application.entity';

@Entity('license_application_assignments')
export class LicenseApplicationAssignment {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => LicenseKey, (licenseKey) => licenseKey.applications)
  licenseKey: LicenseKey;

  @ManyToOne(() => Application, (application) => application.licenseAssignments)
  application: Application;
}
