export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-accent-violet/20 blur-3xl animate-blob" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent-cyan/15 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-accent-pink/10 blur-3xl animate-blob" style={{ animationDelay: "10s" }} />
    </div>
  );
}
