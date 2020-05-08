import { useRouter } from "next/router";
import useBlog from "../../container/blogs/useBlogs";
import BlogPostLayout from "../../components/BlogPostLayout/BlogPostLayout";

export default () => {
  const router = useRouter();

  const { posts, isLoading } = useBlog();

  const possibleRoutes = posts.map((post) => post.fields.Title);

  const blog = posts.filter((item) => item.fields.Title == router.query.id);

  console.log(blog);
  return (
    blog &&
    blog.map((item) => {
      return (
        <BlogPostLayout
          title={item.fields.Title}
          date={item.fields.Date}
          content={item.fields.content}
          author={item.fields.author}
        />
      );
    })
  );
};
