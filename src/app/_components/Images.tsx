import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-7">
      {images.map((image, index) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            width={192}
            height={192}
            src={image.url}
            alt={`Image ${image.name}`}
            style={{ objectFit: "contain" }}
          />
          <div className="text-wrap break-words">{image.name}</div>
        </div>
      ))}
    </div>
  );
}
