import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
