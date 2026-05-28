import { getPost, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import type { Metadata } from "next";
import GiscusComments from "@/components/GiscusComments";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | 踊る阿呆の踊らにゃソンソンblog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? format(new Date(post.date), "yyyy年M月d日", { locale: ja })
    : "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8"
      >
        ← 記事一覧
      </Link>

      <article>
        <header className="mb-8 space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {formattedDate && <time dateTime={post.date}>{formattedDate}</time>}
            {post.tags.length > 0 && (
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted px-2 py-0.5 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-snug">{post.title}</h1>
        </header>

        <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <GiscusComments />
    </div>
  );
}
