import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { LicenseKey } from './license-key.entity';

@Entity('license_expiration_dates')
export class LicenseExpirationDate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => LicenseKey, (licenseKey) => licenseKey.expirationDate)
  @JoinColumn()
  licenseKey: LicenseKey;

  @Column({ type: 'timestamp' })
  first_registration_date: Date;

  @Column({ type: 'timestamp' })
  expiration_date: Date;
}
