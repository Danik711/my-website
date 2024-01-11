import HeroComponent from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    date: "2023-02-10",
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the react framework for productoin - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
];

function HomePage() {
  return (
    <>
      <HeroComponent />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
