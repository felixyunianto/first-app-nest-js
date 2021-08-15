import { Injectable } from '@nestjs/common';

@Injectable()
export class MyNameService {
    getMyName(): string {
        return 'FELIX YUNIANTO GUNAWAN';
    }
}