import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <p>T3 App</p>
      <Link className="p-3 border-[#2e026d] border rounded-lg hover:bg-black" href={'all-posts'}>All Posts</Link>
    </main>
  );
}
