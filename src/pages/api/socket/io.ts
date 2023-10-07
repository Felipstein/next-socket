import { Server as NetServer } from 'http';
import { NextApiRequest } from 'next';
import { Server as ServerIO } from 'socket.io';
import chalk from 'chalk';

import { ServerIOResponse } from '@/@types/ServerIOResponse';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: ServerIOResponse) {
  console.info(chalk.gray(`[SOCKET] ${req.method} ${req.url}`));

  if (!res.socket.server.io) {
    const path = '/api/socket/io';

    const httpServer: NetServer = res.socket.server as any;

    const io = new ServerIO(httpServer, {
      path,
      addTrailingSlash: false,
    });

    res.socket.server.io = io;
  }

  console.info(chalk.green('[SOCKET] Connected'));

  res.end();
}
