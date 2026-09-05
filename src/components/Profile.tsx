import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
        unoptimized
        className="h-24 w-24 rounded-full object-cover"
      />
      <div>
        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          {name}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
