import { SocketIndicator } from '@/components/SocketIndicator';

export default function HomePage() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex w-full items-center gap-8 p-6">
        <div className="flex select-none items-end">
          <h1 className="text-2xl font-bold opacity-90">NEXT</h1>
          <h1 className="text-xl opacity-80">socket</h1>
        </div>

        <SocketIndicator />
      </header>

      <main className="flex-1">Conteúdo</main>
    </div>
  );
}
