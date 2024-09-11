const BlogForm = ({
  handleCreateBlog,
  setTitle,
  setAuthor,
  setUrl,
  title,
  author,
  url,
}) => (
  <form onSubmit={handleCreateBlog}>
    <div>
      Title
      <input type="text" value={title} name="title" onChange={setTitle} />
    </div>
    <div>
      Author
      <input type="text" value={author} name="authoe" onChange={setAuthor} />
    </div>
    <div>
      Author
      <input type="text" value={url} name="url" onChange={setUrl} />
    </div>
    <button type="submit">create</button>
  </form>
);

export default BlogForm;
