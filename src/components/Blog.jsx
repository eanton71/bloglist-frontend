const Blog = ({ blog }) => {
  //console.log(blog)
  return (
    <div>
      <span>Titulo: {blog.title}</span>
      <br />
      <span>Author: {blog.author}</span>
      <br />

      <span>Url: {blog.url}</span>
      <br />
      <span>Likes: {blog.likes}</span>
      <br />
    </div>
  );
}

export default Blog