import { Controller, Get, Param } from '@nestjs/common';

@Controller('greet')
export class AppController {
  @Get()
  hello() {
    return { message: 'Сайн байна уу!' };
  }

  @Get(':name')
  helloName(@Param('name') name: string) {
    return { message: `Сайн уу, ${name}!` };
  }
}