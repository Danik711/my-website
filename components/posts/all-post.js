import classes from "./all-post.module.css";
import PostGrid from "./post-grid";

function AllPost({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPost;
