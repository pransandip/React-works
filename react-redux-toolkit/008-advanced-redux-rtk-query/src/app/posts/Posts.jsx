import { useSelector } from "react-redux";
import { selectAllPosts } from "../../store/slices/posts/postsSlice";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice() // creating a new shallow copy
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <div>
      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </div>
  );
};

export default Posts;
