import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../store/slices/posts/postsSlice";
import { selectAllUsers } from "../../store/slices/users/usersSlice";

const PostsForm = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  // Defined state
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  // dispatch post handler
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">select an option..</option>
            {usersOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default PostsForm;
