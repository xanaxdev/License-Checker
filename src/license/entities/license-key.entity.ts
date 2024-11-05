import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { LicenseCompanyData } from './license-company-data.entity';
import { LicenseExpirationDate } from './license-expiration-date.entity';
import { LicenseApplicationAssignment } from './license-application-assignment.entity';

@Entity('license_keys')
export class LicenseKey {
  @PrimaryGeneratedColumn('uuid')
  key_id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  key: string;

  @Column({ type: 'enum', enum: ['active', 'expired'], default: 'active' })
  status: string;

  @OneToOne(() => LicenseCompanyData, (companyData) => companyData.licenseKey)
  companyData: LicenseCompanyData;

  @OneToOne(() => LicenseExpirationDate, (expirationDate) => expirationDate.licenseKey)
  expirationDate: LicenseExpirationDate;

  @OneToMany(() => LicenseApplicationAssignment, (assignment) => assignment.licenseKey)
  applications: LicenseApplicationAssignment[];
}
