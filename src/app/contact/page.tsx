import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 踊る阿呆の踊らにゃソンソンblog",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">お問い合わせ</h1>
      <p className="text-muted-foreground text-sm mb-8">
        ご質問・ご感想などお気軽にどうぞ。
      </p>
      <ContactForm />
    </div>
  );
}
