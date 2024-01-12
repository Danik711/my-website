import Image from "next/image";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    /* In this case the image will be within "p" tag */
    // img: ({ node, ...props }) => {},
    // img(props) {
    //   const { node, ...rest } = props;
    //   return (
    //     <Image
    //       width={600}
    //       height={300}
    //       alt={node.properties.alt}
    //       src={`/images/posts/${post.slug}/${node.properties.src}`}
    //     />
    //   );
    // },

    /* We overwrite "p" tags if it is an image */
    p: ({ node, ...props }) => {
      if (node.children[0].tagName && node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            {
              <Image
                width={600}
                height={300}
                alt={image.properties.alt}
                src={`/images/posts/${post.slug}/${image.properties.src}`}
              />
            }
          </div>
        );
      }
      return <p>{props.children}</p>;
    },
    code({ children, className, node, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return (
        <SyntaxHighlighter
          {...props}
          style={atomDark}
          language={match[1]}
          children={String(children).replace(/\n$/, "")}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
