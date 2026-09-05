import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 px-4 py-16 dark:bg-black sm:items-center">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile
          name="이상윤"
          bio="풀스택 개발자 | 요즘에는 AI개발에 관심이 많아요"
          imageUrl="https://placehold.co/150x150/orange/white"
        />
        <div className="flex w-full flex-col gap-4">
          <LinkCard title="GitHub" url="https://github.com" />
          <LinkCard title="LinkedIn" url="https://linkedin.com" />
        </div>
      </main>
    </div>
  );
}
