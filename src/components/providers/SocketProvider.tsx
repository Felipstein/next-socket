'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { io as ClientIO, Socket } from 'socket.io-client';

export interface SocketContextProps {
  socket: Socket | null;
  isConnected: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

export interface SocketProviderProps {
  children: ReactNode;
}

export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.info('Trying to connect to socket');

    const socketInstance: Socket = new (ClientIO as any)(process.env.NEXT_PUBLIC_SITE_URL!, {
      path: '/api/socket/io',
      addTrailingSlash: false,
    });

    socketInstance.on('connect', () => {
      console.info('[SOCKET] Connected');

      setIsConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.info('[SOCKET] Disconnected');

      setIsConnected(false);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket, isConnected }}>{children}</SocketContext.Provider>;
}

export const useSocket = () => useContext(SocketContext);
