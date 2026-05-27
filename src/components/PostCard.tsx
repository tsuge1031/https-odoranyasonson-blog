import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = post.date
    ? format(new Date(post.date), "yyyy年M月d日", { locale: ja })
    : "";

  return (
    <article className="group border-b border-border py-8 last:border-0">
      <Link href={`/blog/${post.slug}`} className="block space-y-2">
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
        <h2 className="text-xl font-semibold group-hover:underline underline-offset-4 decoration-muted-foreground">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </Link>
    </article>
  );
}
