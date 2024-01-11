import AllPost from "@/components/posts/all-post";

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

function AllPostsPage() {
  return <AllPost posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
