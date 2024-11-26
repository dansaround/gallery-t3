import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const clerk = await clerkClient();
  const image = await getImage(props.id);
  const uploaderInfo = await clerk.users.getUser(image.userId);

  return (
    <div className="w flex h-full">
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <img
          className="max-h-full flex-shrink object-contain"
          src={image.url}
          alt={image.name}
        />
      </div>

      <div className="flex h-full w-48 flex-shrink-0 flex-col border-l">
        <div className="flex-wrap border-b p-2 text-center text-xl">
          <span className="break-words">{image.name}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
