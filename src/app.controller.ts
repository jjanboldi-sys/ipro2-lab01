import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('greet')
  hello() {
    return { message: 'Сайн байна уу!' };
  }

  @Get('greet/:name')
  helloName(@Param('name') name: string) {
    return { message: `Сайн уу, ${name}!` };
  }

  @Get('info')
  info() {
    return {
      name: 'janboldi',
      studentCode: 'ESE24D017',
      group: '301',
    };
  }

  @Get('calc')
  calc(@Query('a') a: string, @Query('b') b: string) {
    const x = Number(a);
    const y = Number(b);
    return {
      a: x,
      b: y,
      sum: x + y,
      difference: x - y,
      product: x * y,
    };
  }
}