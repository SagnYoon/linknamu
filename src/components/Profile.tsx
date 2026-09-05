type ProfileProps = {
  name: string;
  bio: string;
  initial: string;
};

export default function Profile({ name, bio, initial }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800 text-3xl font-semibold text-white dark:bg-zinc-200 dark:text-zinc-900">
        {initial}
      </div>
      <div>
        <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
