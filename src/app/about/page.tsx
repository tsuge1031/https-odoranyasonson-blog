import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このブログについて | 踊る阿呆の踊らにゃソンソンblog",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">このブログについて</h1>
      <div className="prose prose-neutral max-w-none text-muted-foreground leading-relaxed space-y-4">
        <p>踊る阿呆の踊らにゃソンソンblogへようこそ。</p>
        <p>IT・資格・日常など、踊る阿呆の日々を綴るブログです。</p>
      </div>
    </div>
  );
}
