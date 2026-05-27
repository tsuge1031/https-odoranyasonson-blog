import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">踊る阿呆の踊らにゃソンソンblog</h1>
        <p className="mt-2 text-muted-foreground">IT・資格・日常など、踊る阿呆の日々を綴ります。</p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">まだ記事がありません。</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
