import { Controller, Get, Query } from '@nestjs/common';
import { OpenRouterService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly openRouterService: OpenRouterService) {}

  @Get('chat')
  async getChatResponse(@Query('message') message: string) {
    const response = await this.openRouterService.getChatCompletion(message);
    return response;
  }
}