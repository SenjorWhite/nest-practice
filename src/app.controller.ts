import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hello')
  getRootRoute() {
    return "It's Hello World! Of Course!";
  }

  @Get('/farewell')
  getFarewell() {
    return 'See Yup!';
  }
}
