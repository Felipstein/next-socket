import { Pos } from '@/@types/pos';
import { MousePointer2 } from 'lucide-react';

export interface UserCursorProps {
  username: string;
  color: string;
  pos: Pos;
}

export function UserCursor({ username, color, pos }: UserCursorProps) {
  console.log(`rendering ${username} in position:`, pos);

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        top: pos.y,
        left: pos.x,
      }}
    >
      <span style={{ color }} className="text-xs opacity-80">
        {username}
      </span>

      <MousePointer2 color={color} />
    </div>
  );
}
