import Head from "next/head";
import { getAllPosts } from "@/lib/post-util";
import AllPost from "@/components/posts/all-post";

function AllPostsPage({ allPosts }) {
  return (
    <>
      <Head>
        <title>All my Projects</title>
        <meta
          name="description"
          content="All my projects from diffrent programming fields"
        />
      </Head>
      <AllPost posts={allPosts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 120,
  };
}

export default AllPostsPage;
