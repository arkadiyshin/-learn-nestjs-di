import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(private cpuServise: CpuService, private diskService: DiskService){}
  
  @Get()
  run(){
    return [
      this.cpuServise.compute(1,2),
      this.diskService.getData()
    ]
  }
}
