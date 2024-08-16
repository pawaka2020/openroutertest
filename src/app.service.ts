import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenRouterService {
  private readonly OPENROUTER_KEY = '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';
  private readonly FREE_MODEL_TEST = 'gryphe/mythomist-7b:free';
  private readonly API_URL = 'https://openrouter.ai/api/v1/chat/completions';

  async getChatCompletion(message: string): Promise<any> {
    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.OPENROUTER_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.FREE_MODEL_TEST,
        messages: [
          { role: 'user', content: message },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }
}
