"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <Giscus
        repo="tsuge1031/https-odoranyasonson-blog"
        repoId="R_kgDOSpZpeQ"
        category="General"
        categoryId="DIC_kwDOSpZpec4C9_pc"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ja"
        loading="lazy"
      />
    </div>
  );
}
