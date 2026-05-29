export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink text-white">
      <div className="glass flex items-center gap-4 rounded-lg px-6 py-4">
        <div className="h-4 w-4 animate-ping rounded-full bg-cyanflare" />
        <p className="font-display text-sm uppercase tracking-[0.24em] text-mist">
          Preparing portfolio
        </p>
      </div>
    </main>
  );
}
