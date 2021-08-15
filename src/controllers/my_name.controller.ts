import { Controller, Get } from '@nestjs/common';
import { MyNameService } from '../services/my_name.service';

@Controller()
export class MyNameController {
    constructor(private readonly myNameService: MyNameService){}

    @Get("/my-name")
    getMyName(): string{
        return this.myNameService.getMyName();
    }
}