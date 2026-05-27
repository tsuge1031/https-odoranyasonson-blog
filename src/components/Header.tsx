import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
          踊る阿呆の踊らにゃソンソンblog
        </Link>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">記事一覧</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">このブログについて</Link>
        </nav>
      </div>
    </header>
  );
}
