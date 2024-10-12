import { getServerSession } from "next-auth";
import Link from "next/link";
import { option } from "./api/auth/[...nextauth]/options";

export default async function HomePage() {
  const session = await getServerSession(option)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <p>T3 App</p>
      {
        session?.user ? <p>{session.user.name}</p> : <p>not signed in</p>
      }
      <Link className="p-3 border-[#2e026d] border rounded-lg hover:bg-black" href={'all-posts'}>All Posts</Link>
    </main>
  );
}
