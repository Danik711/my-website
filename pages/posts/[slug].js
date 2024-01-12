import Head from "next/head";
import { getPostData, getPostAllFileNames } from "@/lib/post-util";
import PostContent from "@/components/posts/post-detail/post-content";

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
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
