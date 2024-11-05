import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { LicenseKey } from './license-key.entity';

@Entity('license_company_data')
export class LicenseCompanyData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => LicenseKey, (licenseKey) => licenseKey.companyData)
  @JoinColumn()
  licenseKey: LicenseKey;

  @Column({ type: 'varchar', length: 255 })
  company_name: string;

  @Column({ type: 'varchar', length: 20 })
  nip: string;

  @Column({ type: 'varchar', length: 20 })
  regon: string;

  @Column({ type: 'varchar', length: 20 })
  krs: string;
}
