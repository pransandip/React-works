import "./App.css";
import Greet from "./components/Intro/Greet";
import PropsEx from "./components/Props/PropsEx";

function App() {
  return (
    <div>
      <Greet name="Sandip" isLoggedIn={true} />
      <PropsEx />
    </div>
  );
}

export default App;
