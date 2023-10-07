'use client';

import { SocketProvider } from '@/components/providers/SocketProvider';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <SocketProvider>{children}</SocketProvider>
    </NextUIProvider>
  );
}
