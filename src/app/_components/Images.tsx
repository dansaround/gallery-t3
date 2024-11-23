import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="flex w-72 flex-col rounded-md bg-blue-950 p-5"
        >
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            className="h-62 mb-4 w-full object-cover"
          />
          <div className="flex h-full w-full place-items-center text-wrap break-words border-t">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
}
