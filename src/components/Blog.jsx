const Blog = ({ blog }) => {
  console.log(blog)
  return (
    <div>
      {blog.title}
      {blog.url}
      {blog.likes}
    </div>
  );
}

export default Blog