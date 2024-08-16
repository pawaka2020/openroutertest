import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OpenRouterService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [OpenRouterService],
})
export class AppModule {}
