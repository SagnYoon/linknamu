"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

type Link = {
  id: string;
  title: string;
  url: string;
};

const links: Link[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
];

export default function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
    }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          clickCount={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
