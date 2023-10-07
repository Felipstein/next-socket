'use client';

import { Chip } from '@nextui-org/react';
import { useSocket } from './providers/SocketProvider';
import { CheckCircle2 } from 'lucide-react';

export function SocketIndicator() {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Chip variant="dot" color="warning">
        Polling every 1s
      </Chip>
    );
  }

  return (
    <Chip startContent={<CheckCircle2 className="h-4 w-4" />} color="success">
      Socket Connected
    </Chip>
  );
}
