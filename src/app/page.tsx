import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="px-72">
      <SignedOut>
        <div className="flex h-svh w-full items-center justify-center text-4xl">
          <span>Please sign in ↗️</span>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
