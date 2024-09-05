const Blog = ({ blog }) => {
  console.log(blog)
  return (
    <div>
      <p>Titulo: {blog.title}</p>
      <p>Url: {blog.url}</p>
      <p>Likes: {blog.likes}</p>
    </div>
  );
}

export default Blog