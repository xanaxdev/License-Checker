import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseController } from './license.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseCompanyData } from './entities/license-company-data.entity';
import { LicenseExpirationDate } from './entities/license-expiration-date.entity';
import { Application } from './entities/application.entity';
import { LicenseApplicationAssignment } from './entities/license-application-assignment.entity';
import { LicenseKey } from './entities/license-key.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LicenseKey,
      LicenseCompanyData,
      LicenseExpirationDate,
      Application,
      LicenseApplicationAssignment,
    ])
  ],
  providers: [LicenseService],
  controllers: [LicenseController]
})
export class LicenseModule {}
