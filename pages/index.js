import Head from "next/head";
import { getFeaturedPosts } from "@/lib/post-util";
import HeroComponent from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

function HomePage({ allPosts }) {
  return (
    <>
      <Head>
        <title>Daniil's Website</title>
        <meta
          name="description"
          content="The projects that worked on druing my career"
        />
      </Head>
      <HeroComponent />
      <FeaturedPosts posts={allPosts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getFeaturedPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 120,
  };
}

export default HomePage;
