import blogPost from "../static/Posts.json";
import Post from "./Post";

const Blog = () => {
  for (let el of blogPost) {
    console.log(el.body);
  }

  return (
    <>
      <h1>hello</h1>
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>title</th>
                  <th>userId</th>
                  <th>Body</th>
              </tr>

          </thead>
          <tbody>
              
        {
        blogPost.map((data, index) => (
            <Post
            key={index}
            id={data.id}
            title={data.userId}
            userId={data.userId}
            body={data.body}
            />
            ))}
            </tbody>
      </table>

      {}
    </>
  );
};

export default Blog;
