"use client";
import { AIMessage } from "@/app/server/types/AIMessage";
import styles from "./AIMessageCard.module.sass";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/tokyo-night-dark.css";
import "highlight.js/styles/tokyo-night-light.css";

export default function AIMessageCard({ message }: { message: AIMessage }) {
  let [hover, setHover] = useState(false);

  return (
    <div
      className={styles.parent}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.scroll}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mb-3">{children}</h2>
            ),
            p: ({ children }) => (
              <div className="mb-3 leading-7">{children}</div>
            ),
            //@ts-expect-error
            code({ inline, className, children, ...props }) {
              if (inline) {
                return <code className={styles.inlineCode}>{children}</code>;
              }
              return (
                <pre className={styles.codeBlock}>
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },

            table: ({ children }) => (
              <table className="border-collapse border border-gray-300 my-4">
                {children}
              </table>
            ),
            th: ({ children }) => (
              <th className="border border-gray-300 bg-gray-100 px-4 py-2">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-gray-300 px-4 py-2">{children}</td>
            ),
          }}
        >
          {message.message}
        </ReactMarkdown>
      </div>
      {hover && (
        <>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(message.message);
            }}
          >
            Copy
          </Button>
          <Button>+1</Button>
          <Button>-1</Button>
        </>
      )}
    </div>
  );
}
