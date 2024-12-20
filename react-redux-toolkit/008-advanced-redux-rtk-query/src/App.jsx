import Posts from "./app/posts/Posts";
import PostsForm from "./app/posts/PostsForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostsForm />
      <Posts />
    </div>
  );
}

export default App;
