import { Module } from '@nestjs/common';
import { CpuService } from './cpu/cpu.service';
import { PowerService } from './power.service';

@Module({
  providers: [CpuService, PowerService]
})
export class PowerModule {}
