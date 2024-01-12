import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getPostAllFileNames() {
  return fs.readdirSync(postsDirectory);
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}

export function getAllPosts() {
  const postFiles = getPostAllFileNames();

  return postFiles
    .map((file) => getPostData(file))
    .sort((postA, postB) => (postA.date > postB.data ? -1 : 1));
}
