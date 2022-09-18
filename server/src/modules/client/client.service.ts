import { Injectable, OnModuleInit } from '@nestjs/common';
import { NextServer } from 'next/dist/server/next';
import { environmentConfig } from '../../environment/environment.config';
import createServer from 'next';

@Injectable()
export class ClientService implements OnModuleInit {
  private _server: NextServer;

  async onModuleInit(): Promise<void> {
    try {
      this._server = createServer({
        dev: false,
        dir: '../client',
      });
      await this.server.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  public get server(): NextServer {
    return this._server;
  }
}
