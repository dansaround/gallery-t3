import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/QUixv6SWsRvxYXQPzto8kpQXdSa3jCLyucbsVBqPGoMm7IRA",
  "https://utfs.io/f/QUixv6SWsRvxEwdu0cCh9ClIAcWrYnuNQZbD8egf7U1BiopS",
  "https://utfs.io/f/QUixv6SWsRvxgZ7kU5dNef7uBs8GXHxFNQ503EYVWDZvqn2l",
  "https://utfs.io/f/QUixv6SWsRvx1DWbS06C5vTNhqUrLP4dYsgfe3jnA7zx9Rau",
  "https://utfs.io/f/QUixv6SWsRvxYX8eQXo8kpQXdSa3jCLyucbsVBqPGoMm7IRA",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return <div key={post.id}>{post.name}</div>;
        })}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-32 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
