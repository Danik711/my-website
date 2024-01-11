import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  date: "2024-01-10",
  slug: "getting-started-nextjs",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
