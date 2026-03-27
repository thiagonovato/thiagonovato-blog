import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-6 mb-2 text-xl font-semibold text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-foreground/90" {...props} />
  ),
  a: ({ href, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-accent"
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-accent"
        {...props}
      />
    );
  },
  ul: (props) => <ul className="mb-4 list-disc space-y-1 pl-6" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal space-y-1 pl-6" {...props} />,
  li: (props) => <li className="text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-card px-1.5 py-0.5 font-mono text-sm text-accent-light"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-card-border" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 rounded-xl border border-card-border" alt="" {...props} />
  ),
  table: (props) => (
    <div className="my-4 overflow-x-auto rounded-lg border border-card-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="bg-card px-4 py-2 text-left font-semibold text-foreground" {...props} />
  ),
  td: (props) => (
    <td className="border-t border-card-border px-4 py-2 text-muted" {...props} />
  ),
};
