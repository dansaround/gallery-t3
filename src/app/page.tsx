import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  async function Images() {
    const images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-32 w-full object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
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
