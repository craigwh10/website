import { useRouter } from "next/router";
import useBlog from "../../container/blogs/useBlogs";
import BlogPostLayout from "../../components/BlogPostLayout/BlogPostLayout";
import Head from "next/head";

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
        <>
          <Head>
            <title>{item.fields.Title} - Craigwh.it</title>
            <meta name="author" content={item.fields.author} />
            <meta
              name="keywords"
              content={String(item.fields.keys.contentTags)}
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="shortcut icon"
              href={`//${process.env.URL}/favicon.png`}
            />
          </Head>
          <BlogPostLayout
            title={item.fields.Title}
            date={item.fields.Date}
            content={item.fields.content}
            author={item.fields.author}
          />
        </>
      );
    })
  );
};
