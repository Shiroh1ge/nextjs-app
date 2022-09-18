import { Controller, Get, Req, Res } from '@nestjs/common';
import { ClientService } from './client.service';
import { Request, Response } from 'express';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  /**
   * Renders our React application. It will match any route, which will
   * get rendered by Next.js
   */
  @Get('*')
  renderView(@Req() req: Request, @Res() res: Response) {
    const handle = this.clientService.server.getRequestHandler();

    return handle(req, res);
  }
}
