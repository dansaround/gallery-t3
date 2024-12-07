import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex h-fit flex-wrap justify-center gap-7 p-4">
      {images.map((image, index) => (
        <div key={image.id} className="flex h-52 w-52 flex-col">
          <div className="relative h-full w-full overflow-hidden">
            <Link href={`/img/${image.id}`}>
              <Image
                width={192}
                height={192}
                src={image.url}
                alt={`Image ${image.name}`}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <div className="text-wrap break-words">{image.name}</div>
        </div>
      ))}
    </div>
  );
}
