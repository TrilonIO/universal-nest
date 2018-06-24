import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/speakers')
  findAllSpeakers(): any[] {
    return [
      {
        name: 'Name Dudeman',
        talk: 'Angular for your face',
        image: 'http://via.placeholder.com/50x50',
      },
      {
        name: 'Some Person',
        talk: 'High-five typescript',
        image: 'http://via.placeholder.com/50x50',
      },
      {
        name: 'Samwise Gamgee',
        talk: 'Lord of the Angular',
        image: 'http://via.placeholder.com/50x50',
      },
    ];
  }
}
