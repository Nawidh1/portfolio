export default function SoundWave() {
  return (
    <div
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 hidden sm:flex items-end gap-1 h-8 p-2 bg-neutral-900/80 rounded-lg border border-neutral-800"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingLeft: 'env(safe-area-inset-left)' }}
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1 bg-emerald-500 rounded-full sound-wave-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  )
}
