export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="mx-auto h-full w-full max-w-content border-x border-rule/60" />
    </div>
  );
}
