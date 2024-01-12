import Head from "next/head";
import { getPostData, getPostAllFileNames } from "@/lib/post-util";
import PostContent from "@/components/posts/post-detail/post-content";

function PostPage({ post }) {
  const auxPost = post
    ? post
    : {
        title: "",
        excerpt: "",
        image: "",
        isFeatured: false,
        content: "",
        date: "2024-01-01",
      };
  return (
    <>
      <Head>
        <title>{auxPost.title}</title>
        <meta name="description" content={auxPost.excerpt} />
      </Head>
      <PostContent post={auxPost} />
    </>
  );
}

export function getStaticProps({ params }) {
  // const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const allPaths = getPostAllFileNames().map((name) => ({
    params: { slug: name.replace(/\.md$/, "") },
  }));

  return {
    paths: allPaths,
    fallback: true,
  };
}

export default PostPage;
