import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MyNameController } from './controllers/my_name.controller';
import { AppService } from './services/app.service';
import { MyNameService } from './services/my_name.service';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController,MyNameController],
  providers: [AppService, MyNameService],
})
export class AppModule {}
