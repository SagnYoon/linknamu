type LinkCardProps = {
  title: string;
  url: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({
  title,
  url,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-5 text-base font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      <span>{title}</span>
      <span className="text-xs font-normal text-zinc-400 dark:text-zinc-500">
        {clickCount}회
      </span>
    </a>
  );
}
